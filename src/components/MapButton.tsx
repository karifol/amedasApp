import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props {
  text: string
  element: string
  setElement: (element: string) => void
}

const MapButton = (props: Props): JSX.Element => {
  const { text, element, setElement } = props
  const elementObj: Record<string, string> = {
    気温: 'temp',
    降水量: 'prec',
    風: 'wind'
  }
  const buttonElement = elementObj[text]
  const style = buttonElement === element ? styles.selectedContainer : styles.container
  const handlePress = (text: string): void => {
    setElement(text)
  }
  return (
    <TouchableOpacity style={style} onPress={() => { handlePress(buttonElement) }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(198, 198, 198)',
    borderRadius: 10,
    borderColor: 'rgb(0, 0, 0)',
    borderWidth: 1,
    marginHorizontal: 5
  },
  selectedContainer: {
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
  text: {
    fontSize: 20
  }
})

export default MapButton
