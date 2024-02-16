import { View, Text, StyleSheet } from 'react-native'

const TempLegend = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>気温[℃]</Text>
      <View style={styles.legendItem}>
        <View style={styles.legend35}/>
        <View>
          <Text>35~</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend3035}/>
        <View>
          <Text>30~35</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend2529}/>
        <View>
          <Text>25~29</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend2024}/>
        <View>
          <Text>20~24</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend1519}/>
        <View>
          <Text>15~19</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend1014}/>
        <View>
          <Text>10~14</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend0509}/>
        <View>
          <Text>5~9</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend0004}/>
        <View>
          <Text>0~4</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend_05_01}/>
        <View>
          <Text>-5~-1</Text>
        </View>
      </View>
      <View style={styles.legendItem}>
        <View style={styles.legend_06}/>
        <View>
          <Text>~-6</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: 80,
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
  legend35: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(180, 0, 104)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend3035: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 40, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend2529: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 153, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend2024: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 245, 0)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend1519: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 255, 150)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend1014: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(255, 255, 240)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend0509: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(185, 235, 255)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend0004: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(0, 150, 255)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend_05_01: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(0, 65, 255)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  legend_06: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(0, 32, 128)',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  }
})

export default TempLegend
