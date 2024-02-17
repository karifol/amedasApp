import { View, Text, StyleSheet } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

interface Props {
  title: string
  rankObj: Record<string, {
    rank: string
    pref: string
    amedas: string
    value: string
    time: string
  }>
}

const RankCard = (props: Props): JSX.Element => {
  const { title, rankObj } = props

  if (Object.keys(rankObj).length === 1) {
    console.log(rankObj)
    return (
      <View style={styles.NoItemContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.NoItemTextContainer}>
          <Text style={{ fontSize: 14 }}>{rankObj['2'].rank}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#000000' }}>
          <Row data={['順位', '県', 'AMeDAS', '観測値', '観測時間']} style={styles.row} textStyle={{ fontWeight: 'bold', textAlign: 'center' }}/>
          <Rows data={
            ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].map((i: string) => {
              if (rankObj[i] === undefined) {
                return ['', '', '', '', '']
              }
              return [
                rankObj[i].rank,
                rankObj[i].pref,
                rankObj[i].amedas,
                rankObj[i].value,
                rankObj[i].time
              ]
            })
          } style={styles.row} textStyle={{
            fontSize: 12,
            textAlign: 'center'
          }}/>
        </Table>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5
  },
  title: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 20,
    width: 340,
    fontSize: 12
  },
  NoItemContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    width: '90%',
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5
  },
  NoItemTextContainer: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
})

export default RankCard
