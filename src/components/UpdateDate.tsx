import { View, Text, StyleSheet } from 'react-native'

interface Props {
  day: string
  hour: string
}

const UpdateDate = (props: Props): JSX.Element => {
  const { day, hour } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>最終更新日時: {day} {hour}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    height: 50
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default UpdateDate
