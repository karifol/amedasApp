import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import fetchRanking from '../../utils/fetchRanking'
import RankCard from '../../components/RankCard'
import LoadMap from '../../components/LoadMap'
import UpdateDate from '../../components/UpdateDate'
import CommentCard from '../../components/CommentCard'
import RankDateCard from '../../components/RankDateCard'

// 過去データの表示

const ranking = (): JSX.Element => {
  const [rankObj, setRankObj] = useState({ init: true } as any)
  const [isLoading, setIsLoading] = useState(true)
  const [date, setDate] = useState('')

  useEffect(() => {
    if (date !== '') {
      setIsLoading(true)
      fetchRanking(date)
        .then((data) => {
          setRankObj(data)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [date])

  const titleArray = [
    ['日最高気温の高い方から', '#ffcfcf'],
    ['日最低気温の低い方から', '#acf7ff'],
    ['日最高気温の低い方から', '#ffcfcf'],
    ['日最低気温の高い方から', '#acf7ff'],
    ['1時間降水量の日最大値（5mm以上のみ）', '#53b7e5'],
    ['3時間降水量の日最大値（5mm以上のみ）', '#53b7e5'],
    ['6時間降水量の日最大値（5mm以上のみ）', '#53b7e5'],
    ['12時間降水量の日最大値（5mm以上のみ）', '#53b7e5'],
    ['日最大風速', '#b8ff9d'],
    ['日最大瞬間風速', '#b8ff9d'],
    ['積雪の深さ', '#00ccff'],
    ['日最深積雪（5cm以上のみ）', '#00ccff'],
    ['3時間降雪量の日最大値（5cm以上のみ）', '#00ccff'],
    ['6時間降雪量の日最大値（5cm以上のみ）', '#00ccff'],
    ['12時間降雪量の日最大値（5cm以上のみ）', '#00ccff'],
    ['24時間降雪量の日最大値（5cm以上のみ）', '#00ccff'],
    ['48時間降雪量の日最大値（5cm以上のみ）', '#00ccff'],
    ['72時間降雪量の日最大値（5cm以上のみ）', '#00ccff']
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
          <RankDateCard
            date={date}
            setDate={setDate}
          />
          {
            rankObj.init !== true &&
            titleArray.map((title: string[], index: number) => {
              if (rankObj.tableObj[title[0]] === undefined) {
                return <View key={index}></View>
              }
              return (
                <RankCard
                  color={title[1]}
                  key={index}
                  title={title[0]}
                  rankObj={rankObj.tableObj[title[0]]}
                />
              )
            })
          }
          <CommentCard />
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
