import { View, Text, StyleSheet } from 'react-native'

const WindLegend = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>風速[m/s]</Text>
      <View style={styles.legendItem}>
        <View style={styles.legend25}/>
        <View>
          <Text>25~</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend20}/>
        <View>
          <Text>20~24</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend15}/>
        <View>
          <Text>15~19</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend10}/>
        <View>
          <Text>10~14</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend05}/>
        <View>
          <Text>5~9</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend00}/>
        <View>
          <Text>0~4</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 110,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    position: 'absolute',
    bottom: 100,
    padding: 10
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  legend25: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(180, 0, 104)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend20: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 40, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend15: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 153, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend10: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 245, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend05: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(0, 65, 255)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend00: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(242, 242, 255)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  }
})

export default WindLegend
