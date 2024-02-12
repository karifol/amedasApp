import { View, StyleSheet } from 'react-native'
import FooterButton from './FooterButton'
import { AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons'

const Footer = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <FooterButton labelText='メニュー' render='/amedas/menue' icon={<AntDesign name="bars" size={40}/>}/>
        <FooterButton labelText='マップ' render='/amedas/map' icon={<FontAwesome name="map" size={40}/>} />
        <FooterButton labelText='ランキング' render='/amedas/ranking' icon={<FontAwesome6 name="ranking-star" size={40}/>} />
        <FooterButton labelText='グラフ' render='/amedas/graph' icon={<AntDesign name="linechart" size={40}/>}/>
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
  }
})

export default Footer
