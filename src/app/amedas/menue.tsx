import { View, Text, ScrollView, Linking, StyleSheet } from 'react-native'
import { AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MenueItem from '../../components/MenueItem'

const menue = (): JSX.Element => {
  const openURL = async (url: string): Promise<void> => {
    await Linking.openURL(url)
  }
  const handlePress = (url: string): void => {
    openURL(url).catch((err) => { console.error('An error occurred', err) })
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.menueContainer}>
          <MenueItem
            text='マップ'
            render='/amedas/map'
            icon={<FontAwesome name="map" size={20} />}
          />
          <MenueItem
            text='ランキング'
            render='/amedas/ranking'
            icon={<FontAwesome6 name="ranking-star" size={20} />}
          />
          <MenueItem
            text='グラフ'
            render='/amedas/graph'
            icon={<AntDesign name="linechart" size={20} />}
          />
          {/* <MenueItem
            text='極値更新状況'
            render='/amedas/extreme'
            icon={<AntDesign name="linechart" size={20} />}
          />
          <MenueItem
            text='表'
            render='/amedas/extreme'
            icon={<AntDesign name="linechart" size={20} />}
          />
          <MenueItem
            text='過去データ'
            render='/amedas/extreme'
            icon={<AntDesign name="linechart" size={20} />}
          /> */}
        </View>
        <View>
          <Text
            onPress={() => { handlePress('https://www.jma.go.jp/bosai/map.html#5/34.5/137/&elem=temp&contents=amedas&interval=60') }}
            style={styles.link}
          >
            出典：AMeDAS｜気象庁
          </Text>
          <Text
            onPress={() => { handlePress('https://www.data.jma.go.jp/stats/data/mdrr/rank_daily/index.html') }}
            style={styles.link}
          >
            出典：毎日の全国観測値ランキング｜気象庁
          </Text>
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
  },
  mainContainer: {
    width: '100%',
    padding: 10
  },
  link: {
    paddingTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  menueContainer: {
    alignItems: 'center',
    width: '100%'
  }
})

export default menue
