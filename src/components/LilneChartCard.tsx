import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const LineChartCard = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>気温</Text>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: ['10:20', '10:30', '10:40', '10:50', '11:00', '11:10'],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10
                ]
              }
            ]
          }}
          width={Dimensions.get('window').width * 0.9 - 20}
          height={160}
          yAxisSuffix=' ℃'
          yAxisInterval={1}
          chartConfig={{
            backgroundGradientFrom: 'white',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => '#000000',
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
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10
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
