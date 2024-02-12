import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

interface Props {
  text: string
  render: string
  icon: JSX.Element
}

const MenueItem = (props: Props): JSX.Element => {
  const { text, render, icon } = props
  const renderToUrl = (path: string): void => {
    router.push(path)
  }
  const onPress = (): void => {
    renderToUrl(render)
  }
  return (
    <TouchableOpacity style={styles.menue} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  menue: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#000000'
  }
})

export default MenueItem
