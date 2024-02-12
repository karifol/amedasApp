import { View, Text, StyleSheet } from 'react-native'

const PlaceCard = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>東京</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default PlaceCard
