import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

interface Props {
  title: string
  timeArr: string[]
  valueArr: number[]
}

const BarChartCard = (props: Props): JSX.Element => {
  const { title, timeArr, valueArr } = props
  if (valueArr.length !== timeArr.length) {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.chartContainer}>
          <Text>データがありません</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.chartContainer}>
        <BarChart
          data={{
            labels: timeArr.map((time) => {
              const index = timeArr.indexOf(time)
              if (index % 3 === 0) {
                const label = time.slice(8, 10) + ':' + time.slice(10, 12)
                return label
              } else {
                return ''
              }
            }),
            datasets: [
              {
                data: valueArr
              }
            ]
          }}
          yAxisSuffix=''
          yAxisLabel=''
          width={Dimensions.get('window').width * 0.9 - 20}
          height={160}
          yAxisInterval={1}
          chartConfig={{
            backgroundGradientFrom: 'white',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => '#005eff',
            labelColor: (opacity = 1) => '#000000',
            barPercentage: 0.1,
            propsForBackgroundLines: {
              stroke: '#aeaeae',
              strokeWidth: 1
            }
          }}
          withInnerLines={true}
          fromZero={true}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5
  },
  title: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  chartContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BarChartCard
