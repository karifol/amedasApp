import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

interface Props {
  title: string
  color: string
  timeArr: string[]
  valueArr: number[]
}

const LineChartCard = (props: Props): JSX.Element => {
  const { title, color, timeArr, valueArr } = props
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
        <LineChart
          data={{
            labels: timeArr,
            datasets: [
              {
                data: valueArr
              }
            ]
          }}
          width={Dimensions.get('window').width * 0.9 - 20}
          height={160}
          yAxisInterval={1}
          chartConfig={{
            backgroundGradientFrom: 'white',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => color,
            labelColor: (opacity = 1) => '#000000',
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '3',
              strokeWidth: '2',
              stroke: '#ffffff'
            }
          }}
          formatYLabel={(value) => {
            return value
          }}
          formatXLabel={(value) => {
            const index = timeArr.indexOf(value)
            if (index % 3 === 0) {
              // 20240217122000
              const label = value.slice(8, 10) + ':' + value.slice(10, 12)
              return label
            } else {
              return ''
            }
          }}
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

export default LineChartCard
