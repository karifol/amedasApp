import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RankCard from '../../components/RankCard'

const ranking = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <RankCard />
          <RankCard />
          <RankCard />
          <RankCard />
          <RankCard />
          <RankCard />
          <RankCard />
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
    width: '100%'
  },
  mainContainer: {
    height: Dimensions.get('window').height - 200
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ranking
