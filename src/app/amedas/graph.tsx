import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MapCard from '../../components/MapCard'
import PlaceCard from '../../components/PlaceCard'
import LineChartCard from '../../components/LilneChartCard'
import BarChartCard from '../../components/BarChartCard'
import fetchAmedasPast from '../../utils/fetchAmedasPast'
import LoadMap from '../../components/LoadMap'

interface amedasPast {
  time: string[]
  temp: number[]
  wind: number[]
  humidity: number[]
  prec1h: number[]
}

const graph = (): JSX.Element => {
  const [place, setPlace] = useState({
    id: 44132,
    name: '東京'
  })
  const [amedasPast, setAmedasPast] = useState({
    time: ['0'] as string[],
    temp: [0] as number[],
    wind: [0] as number[],
    humidity: [0] as number[],
    prec1h: [0] as number[]
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAmedasPast(place.id)
      .then((data) => {
        setAmedasPast(data as amedasPast)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  , [place])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {isLoading && <LoadMap />}
          <MapCard
            setPlace={setPlace}
            setIsLoading={setIsLoading}
          />
          <PlaceCard
            place={place}
          />
          <LineChartCard
            title = '気温[℃]'
            color = 'red'
            timeArr = {amedasPast.time}
            valueArr = {amedasPast.temp}
          />
          <LineChartCard
            title = '風速[m/s]'
            color = 'green'
            timeArr = {amedasPast.time}
            valueArr = {amedasPast.wind}
          />
          <BarChartCard
            title = '1時間降水量[mm/h]'
            timeArr = {amedasPast.time}
            valueArr = {amedasPast.prec1h}
          />
          <LineChartCard
            title = '湿度[%]'
            color = 'blue'
            timeArr = {amedasPast.time}
            valueArr = {amedasPast.humidity}
          />
        </ScrollView>
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
  scrollViewContainer: {
    width: '100%',
    height: Dimensions.get('window').height - 200
  },
  scrollView: {
    width: '100%',
    alignItems: 'center'
  }
})

export default graph
