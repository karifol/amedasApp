import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const ranking = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
        <ScrollView>
          <View >
            <Text>ranking</Text>
          </View>
        </ScrollView>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})

export default ranking
