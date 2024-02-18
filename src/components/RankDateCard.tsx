import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'

interface Props {
  date: string
  setDate: (date: string) => void
}

const get8days = (): string[] => {
  const date = new Date()
  const dateArray: string[] = []
  for (let i = 0; i < 8; i++) {
    const month = date.getMonth() + 1
    const day = date.getDate()
    const monthStr = month < 10 ? `0${month}` : `${month}`
    const dayStr = day < 10 ? `0${day}` : `${day}`
    dateArray.push(`${monthStr}${dayStr}`)
    date.setDate(date.getDate() - 1)
  }
  return dateArray
}

const RankDateCard = (props: Props): JSX.Element => {
  const { date, setDate } = props

  useEffect(() => {
    const dateArray = get8days()
    setDate(dateArray[0])
    console.log(get8days().slice(4, 8))
  }, [])

  const handlePress = (date: string): void => {
    setDate(date)
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {get8days().slice(0, 4).map((text) => {
          const dateStr = text.slice(0, 2) + '/' + text.slice(2, 4)
          let style = styles.dateContainer
          if (date === text) {
            style = styles.selectedDateContainer
          }
          return (
            <TouchableOpacity
              key={text}
              style={style}
              onPress={() => { handlePress(text) }}
            >
              <Text style={styles.text}>{dateStr}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.row}>
        {get8days().slice(4, 8).map((text) => {
          const dateStr = text.slice(0, 2) + '/' + text.slice(2, 4)
          let style = styles.dateContainer
          if (date === text) {
            style = styles.selectedDateContainer
          }
          return (
            <TouchableOpacity
              key={text}
              style={style}
              onPress={() => { handlePress(text) }}
            >
              <Text style={styles.text}>{dateStr}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    height: 80
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 40,
    alignItems: 'center'
  },
  dateContainer: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  selectedDateContainer: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    backgroundColor: '#89d9ed'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default RankDateCard
