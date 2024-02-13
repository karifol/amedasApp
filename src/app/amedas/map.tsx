import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Slider from '@react-native-community/slider'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MapButton from '../../components/MapButton'
import fetchTable from '../../utils/fetchTable'
import fetchLatestTime from '../../utils/fetchLatestTime'
import fetchAmedas from '../../utils/fetchAmedas'

const map = (): JSX.Element => {
  const [slideValue, setSlideValue] = useState(5)
  const [time, setTime] = useState({ hour: 0, minute: 0 })
  const [element, setElement] = useState('temp')
  const [table, setTable] = useState([])
  const [latestTime, setLatestTime] = useState('')
  const [ameasObj, setAmeasObj] = useState({} as any)

  const initTime = (): void => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const minuteMod = minute % 10
    setTime({ hour, minute: minute - minuteMod })
  }

  const updateTime = (): void => {
    const date = new Date()
    const delta = (10 - slideValue) * 10
    date.setMinutes(date.getMinutes() - delta)
    const hour = date.getHours()
    const minute = date.getMinutes()
    const minuteMod = minute % 10
    setTime({ hour, minute: minute - minuteMod })
  }

  useEffect(() => {
    if (time.hour !== 0 && time.minute !== 0) return
    initTime()
    fetchTable()
      .then((data) => {
        setTable(data as [])
      })
      .catch((error) => {
        console.log(error)
      })
    fetchLatestTime()
      .then((data) => {
        setLatestTime(data as string)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (time.hour === 0 && time.minute === 0) return
    fetchAmedas(latestTime)
      .then((data) => {
        setAmeasObj(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [latestTime])

  useEffect(() => {
    updateTime()
  }, [slideValue])

  useEffect(() => {
    if (time.hour === 0 && time.minute === 0) return
    console.log([time, element])
  }, [time, element])

  const handleChange = (value: number): void => {
    setSlideValue(value)
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <View>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 35.681236,
            longitude: 139.767125,
            latitudeDelta: 1,
            longitudeDelta: 1
          }}
        >
          {table.map((data: any) => {
            if (ameasObj === null) return null
            if (Object.keys( ameasObj.length === 0)) return null
            return (
              <Marker
                coordinate={{
                  latitude: data.latitude,
                  longitude: data.longitude
                }}
                key={data.id}
                title={ ameasObj[String(data.id)] ? ameasObj[data.id].temp[0] : '' }
              >
                <View style={{
                  width: Dimensions.get('window').width / 15,
                  height: Dimensions.get('window').width / 15,
                  borderRadius: 50,
                  backgroundColor: 'blue',
                  opacity: 0.5
                }} />
              </Marker>
            )
          })}
        </MapView>
        </View>
        <View style={styles.menueContainer}>
          <MapButton
            text='気温'
            element={element}
            setElement={setElement}
          />
          <MapButton
            text='降水量'
            element={element}
            setElement={setElement}
          />
          <MapButton
            text='風'
            element={element}
            setElement={setElement}
          />
        </View>
        <View style={styles.sliderContainer}>
          <View>
            <Text style={styles.timeText}>{`${time.hour}時${time.minute}分`}</Text>
          </View>
          <Slider
            style={{ width: 300, height: 30 }}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onValueChange={(value) => { handleChange(value) }}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#e1e1e1"
            thumbTintColor='#000000'
            value={slideValue}
          />
        </View>
      </View>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  mainContainer: {
    width: '100%',
    height: Dimensions.get('window').height - 200,
    backgroundColor: 'rgb(225, 225, 225)'
  },
  menueContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10
  },
  menue: {
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    borderColor: 'rgb(0, 0, 0)',
    borderWidth: 1,
    marginHorizontal: 5
  },
  menueText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  sliderContainer: {
    width: '100%',
    height: 80,
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)'
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  }
})

export default map
