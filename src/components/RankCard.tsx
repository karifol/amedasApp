import { View, Text, StyleSheet } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

const RankCard = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>最高気温：高い方から</Text>
      </View>
      <View style={styles.titleContainer}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#000000' }}>
          <Row data={['順位', '県', 'AMeDAS', '観測値', '観測時間']} style={styles.row} textStyle={{ fontWeight: 'bold' }}/>
          <Rows data={[
            ['1', '宮崎', '宮崎', '35.0', '13:00'],
            ['2', '鹿児島', '鹿屋', '34.8', '13:00'],
            ['3', '宮崎', '都城', '34.7', '13:00'],
            ['4', '宮崎', '延岡', '34.6', '13:00'],
            ['5', '鹿児島', '種子島', '34.5', '13:00'],
            ['6', '鹿児島', '鹿児島', '34.4', '13:00'],
            ['7', '鹿児島', '鹿屋', '34.3', '13:00'],
            ['8', '宮崎', '宮崎', '34.2', '13:00'],
            ['9', '宮崎', '都城', '34.1', '13:00'],
            ['10', '宮崎', '延岡', '34.0', '13:00']
          ]} style={styles.row} textStyle={{}}/>
        </Table>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 10
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
    width: 340
  }
})

export default RankCard
