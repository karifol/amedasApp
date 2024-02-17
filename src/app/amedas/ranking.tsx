import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import fetchRanking from '../../utils/fetchRanking'
import RankCard from '../../components/RankCard'
import LoadMap from '../../components/LoadMap'
import UpdateDate from '../../components/UpdateDate'

const ranking = (): JSX.Element => {
  const [rankObj, setRankObj] = useState({ init: true } as any)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetchRanking()
      .then((data) => {
        setRankObj(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const titleArray = [
    '日最高気温の高い方から',
    '日最低気温の低い方から',
    '日最高気温の低い方から',
    '日最低気温の高い方から',
    '1時間降水量の日最大値（5mm以上のみ）',
    '3時間降水量の日最大値（5mm以上のみ）',
    '6時間降水量の日最大値（5mm以上のみ）',
    '12時間降水量の日最大値（5mm以上のみ）',
    '日最大風速',
    '日最大瞬間風速'
  ]
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          { isLoading && <LoadMap /> }
          <UpdateDate
            day={rankObj.updateDay}
            hour={rankObj.updateHour}
          />
          {
            rankObj.init !== true &&
            titleArray.map((title: string, index: number) => {
              return (
                <RankCard
                  key={index}
                  title={title}
                  rankObj={rankObj.tableObj[title]}
                />
              )
            })
          }
        </ScrollView>
      </View>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    width: '100%'
  },
  mainContainer: {
    height: Dimensions.get('window').height - 200
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ranking
