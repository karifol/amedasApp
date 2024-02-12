import { View, StyleSheet } from 'react-native'
import FooterButton from './FooterButton'
import { AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'

const Footer = (): JSX.Element => {
  const route = useRoute()
  const selected = route.name.split('/')[1] // 現在のページ名
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <FooterButton
          labelText='メニュー'
          render='/amedas/menue'
          icon={<AntDesign name="bars" size={40} style={
            selected === 'menue' ? styles.iconSelected : styles.icon
          }/>}
        />
        <FooterButton
          labelText='マップ'
          render='/amedas/map'
          icon={<FontAwesome name="map"
          size={40}
          style={
            selected === 'map' ? styles.iconSelected : styles.icon
          }/>}
        />
        <FooterButton
          labelText='ランキング'
          render='/amedas/ranking'
          icon={<FontAwesome6 name="ranking-star" size={40} style={
            selected === 'ranking' ? styles.iconSelected : styles.icon
          }/>}
        />
        <FooterButton
          labelText='グラフ'
          render='/amedas/graph'
          icon={<AntDesign name="linechart" size={40} style={
            selected === 'graph' ? styles.iconSelected : styles.icon
          }/>}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  icon: {
    color: 'rgb(161, 161, 161)'
  },
  iconSelected: {
    color: 'rgb(44, 161, 185)'
  }
})

export default Footer
