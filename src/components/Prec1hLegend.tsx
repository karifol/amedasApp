import { View, Text, StyleSheet } from 'react-native'

const Prec1hLegend = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>1時間</Text>
      <Text>降水量[mm/h]</Text>
      <View style={styles.legendItem}>
        <View style={styles.legend80}/>
        <View>
          <Text>80~</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend50}/>
        <View>
          <Text>50~79</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend30}/>
        <View>
          <Text>30~49</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend20}/>
        <View>
          <Text>20~29</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend10}/>
        <View>
          <Text>10~19</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend05}/>
        <View>
          <Text>5~9</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend01}/>
        <View>
          <Text>1~4</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend00}/>
        <View>
          <Text>0~0.9</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 210,
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
  legend80: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(180, 0, 104)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend50: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 40, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend30: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 153, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend20: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 245, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend10: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(0, 65, 255)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend05: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(33, 140, 255)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend01: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(160, 210, 255)',
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

export default Prec1hLegend
