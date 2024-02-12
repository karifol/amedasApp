import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '@react-native-community/slider'
import { useState, useEffect } from 'react'
import MapView from 'react-native-maps'

const map = (): JSX.Element => {
  const [slideValue, setSlideValue] = useState(5)
  const [time, setTime] = useState('10時20分')
  useEffect(() => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    setTime(`${hour}時${minute}分`)
  }, [])

  const handleChange = (value: number): void => {
    setSlideValue(value)
    const date = new Date()
    const delta = (10 - value) * 10
    date.setMinutes(date.getMinutes() - delta)
    const hour = date.getHours()
    const minute = date.getMinutes()
    setTime(`${hour}時${minute}分`)
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
        </MapView>
        </View>
        <View style={styles.menueContainer}>
          <TouchableOpacity style={styles.menue}>
            <Text style={styles.menueText}>気温</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menue}>
            <Text style={styles.menueText}>湿度</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menue}>
            <Text style={styles.menueText}>降水量</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menue}>
            <Text style={styles.menueText}>風</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sliderContainer}>
          <View>
            <Text style={styles.timeText}>{time}</Text>
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
