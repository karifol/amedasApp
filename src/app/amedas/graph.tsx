import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MapCard from '../../components/MapCard'
import PlaceCard from '../../components/PlaceCard'
import LineChart from '../../components/LilneChartCard'

const graph = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <MapCard />
          <PlaceCard />
          <LineChart />
          <LineChart />
          <LineChart />
          <LineChart />
          <LineChart />
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
