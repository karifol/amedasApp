import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HeaderText</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 96,
    width: '100%',
    backgroundColor: 'rgb(44, 161, 185)',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32
  }
})

export default Header
