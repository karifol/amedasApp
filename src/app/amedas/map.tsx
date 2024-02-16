import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useState, useEffect } from 'react'
import { AntDesign, FontAwesome6 } from '@expo/vector-icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MapButton from '../../components/MapButton'
import fetchTable from '../../utils/fetchTable'
import fetchLatestTime from '../../utils/fetchLatestTime'
import fetchAmedas from '../../utils/fetchAmedas'
import AmedasLegend from '../../components/TempLegend'
import Prec1hLegend from '../../components/Prec1hLegend'
import WindLegend from '../../components/WindLegend'

interface Amedas {
  temp: string[]
  prec: string[]
  wind: string[]
  id: string
  windDirection: string[]
}

interface Table {
  id: string
  latitude: number
  longitude: number
  kjName: string
}

const map = (): JSX.Element => {
  const [slideValue, setSlideValue] = useState(10)
  const [time, setTime] = useState({ year: 0, month: 0, day: 0, hour: 0, minute: 0 })
  const [element, setElement] = useState('temp' as string)
  const [table, setTable] = useState([] as Table[])
  const [latestTime, setLatestTime] = useState('')
  const [amedasObj, setAmedasObj] = useState([] as Amedas[])

  const circleColor = (value: number): string => {
    if (element === 'temp') {
      if (value < -5) return 'rgb(65, 37, 124)'
      if (value < 0) return 'rgb(0, 0, 255)'
      if (value < 5) return 'rgb(55, 115, 255)'
      if (value < 10) return 'rgb(141, 255, 249)'
      if (value < 15) return 'rgb(255, 255, 255)'
      if (value < 20) return 'rgb(255, 251, 124)'
      if (value < 25) return 'rgb(255, 255, 0)'
      if (value < 30) return 'rgb(255, 136, 0)'
      if (value < 35) return 'rgb(255, 4, 0)'
      return 'rgb(255, 0, 195)'
    }
    if (element === 'precipitation1h') {
      if (value === 0) return 'rgba(255, 255, 255, 0)'
      if (value < 1) return 'rgb(255, 255, 255)'
      if (value < 5) return 'rgb(145, 229, 255)'
      if (value < 10) return 'rgb(41, 155, 255)'
      if (value < 20) return 'rgb(0, 98, 255)'
      if (value < 30) return 'rgb(255, 225, 0)'
      if (value < 50) return 'rgb(255, 136, 0)'
      if (value < 80) return 'rgb(255, 0, 0)'
      return 'rgb(164, 0, 150)'
    }
    if (element === 'wind') {
      if (value < 5) return 'rgb(255, 255, 255)'
      if (value < 10) return 'rgb(0, 47, 255)'
      if (value < 15) return 'rgb(255, 255, 0)'
      if (value < 20) return 'rgb(255, 157, 0)'
      if (value < 25) return 'rgb(255, 47, 0)'
      return 'rgb(208, 0, 255)'
    }
    return 'rgb(255, 255, 255)'
  }

  const borderColor = (value: number): string => {
    if (element === 'temp') {
      return 'rgb(0, 0, 0)'
    }
    if (element === 'precipitation1h') {
      if (value === 0) return 'rgba(255, 255, 255, 0)'
      return 'rgb(0, 0, 0)'
    }
    if (element === 'wind') {
      return 'rgb(0, 0, 0)'
    }
    return 'rgb(255, 255, 255)'
  }

  const circleLabel = (value: number): string => {
    if (element === 'temp') return `${value}℃`
    if (element === 'precipitation1h') return `${value}mm`
    if (element === 'wind') return `${value}m/s`
    return `${value}`
  }

  const initTime = (): void => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const minuteMod = minute % 10
    setTime({ year, month, day, hour, minute: minute - minuteMod })
  }

  const updateTime = (): void => {
    const yearLa = latestTime.slice(0, 4)
    const monthLa = latestTime.slice(4, 6)
    const dayLa = latestTime.slice(6, 8)
    const hourLa = latestTime.slice(8, 10)
    const minuteLa = latestTime.slice(10, 12)
    const date = new Date(`${yearLa}-${monthLa}-${dayLa}T${hourLa}:${minuteLa}:00`)
    const delta = (10 - slideValue) * 10
    date.setMinutes(date.getMinutes() - delta)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const minuteMod = minute % 10
    setTime({ year, month, day, hour, minute: minute - minuteMod })
  }

  useEffect(() => {
    if (time.hour !== 0 && time.minute !== 0) return
    initTime()
    fetchTable()
      .then((data) => {
        setTable(data as Table[])
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
    const { year, month, day, hour, minute } = time
    const latestTime = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}${hour.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`
    fetchAmedas(latestTime)
      .then((data) => {
        setAmedasObj(data as Amedas[])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [time])

  useEffect(() => {
    updateTime()
    console.log([time, latestTime])
  }, [slideValue, latestTime])

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
          {table.map((data) => {
            if (data.id === null) return null
            if (data === null) return null
            if (amedasObj.length === 0) return null
            if (table.length === 0) return null
            const amedas = amedasObj.find((amedas) => amedas.id === data.id)
            if (amedas === undefined) return null
            if (amedas[element as keyof Amedas] === undefined) return null
            const value = amedas[element as keyof Amedas][0]
            let marker = null
            if (element === 'wind') {
              const direction = amedas.windDirection[0]
              marker = (
                <>
                  <FontAwesome6
                    name="location-arrow"
                    size={30}
                    color='rgb(0, 0, 0)'
                    style={{
                      transform: [{ rotate: `${Number(direction) * 22.5 + 135}deg` }]
                    }}
                  />
                  <FontAwesome6
                    name="location-arrow"
                    size={24}
                    color={circleColor(Number(value))}
                    style={{
                      transform: [{ rotate: `${Number(direction) * 22.5 + 135}deg` }],
                      position: 'absolute'
                    }}
                  />
                </>

              )
            } else {
              marker = (
                <View style={{
                  width: Dimensions.get('window').width / 15,
                  height: Dimensions.get('window').width / 15,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: borderColor(Number(value)),
                  backgroundColor: circleColor(Number(value)),
                  opacity: 0.8
                }} />
              )
            }
            return (
              <Marker
                coordinate={{
                  latitude: data.latitude,
                  longitude: data.longitude
                }}
                key={data.id}
                title = {`${data.kjName} ${circleLabel(Number(value))}`}
              >
                {marker}
              </Marker>
            )
          })}
        </MapView>
        </View>
        <View style={styles.legendContainer}>
          {element === 'temp' && <AmedasLegend />}
          {element === 'precipitation1h' && <Prec1hLegend />}
          {element === 'wind' && <WindLegend />}
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
            { slideValue !== 0 ? <AntDesign name="left" size={50} color="rgb(255, 255, 255)" onPress={() => { handleChange(slideValue - 1) }}/> : <View style={styles.nullArrow} />}
            <Text style={styles.timeText}>{`${time.hour}時${time.minute}分`}</Text>
            { slideValue !== 10 ? <AntDesign name="right" size={50} color="rgb(255, 255, 255)" onPress={() => { handleChange(slideValue + 1) }}/> : <View style={styles.nullArrow} />}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row'
  },
  timeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
    width: 200,
    textAlign: 'center'
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  },
  legendContainer: {
    position: 'absolute',
    bottom: 50,
    left: 10
  },
  nullArrow: {
    width: 50,
    height: 50
  }
})

export default map
