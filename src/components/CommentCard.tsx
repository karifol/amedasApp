import { View, StyleSheet, Text } from 'react-native'

const CommentCard = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {'「 ) 」: 統計を行う対象資料が許容範囲で欠けていますが、上位の統計を用いる際は一部の例外を除いて正常値（資料が欠けていない）と同等に扱います（準正常値）。 必要な資料数は、要素または現象、統計方法により若干異なりますが、全体数の80％を基準とします。'}
      </Text>
      <Text style={styles.text}>
        {'「 ] 」 : 統計を行う対象資料が許容範囲を超えて欠けています（資料不足値）。 値そのものを信用することはできず、通常は上位の統計に用いませんが、極値、合計、度数等の統計ではその値以上（以下）であることが確実である、といった性質を利用して統計に利用できる場合があります。'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    // backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '90%'
  },
  text: {
    fontSize: 10,
    color: '#787878'
  }
})

export default CommentCard
