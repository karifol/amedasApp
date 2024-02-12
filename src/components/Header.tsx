import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'

const Header = (): JSX.Element => {
  const fileObj = {
    menue: 'メニュー',
    map: 'マップ',
    ranking: 'ランキング',
    graph: 'グラフ'
  } as const
  const route = useRoute()
  const selected = route.name.split('/')[1] as keyof typeof fileObj
  const title = fileObj[selected] as string
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
