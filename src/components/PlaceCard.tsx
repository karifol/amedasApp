import { View, Text, StyleSheet } from 'react-native'

interface Props {
  place: {
    id: number
    name: string
  }
}

const PlaceCard = (props: Props): JSX.Element => {
  const { place } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{place.name}</Text>
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
