import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useRef } from 'react'

const LoadMap = (): JSX.Element => {
  const spinValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1000, // 1 second
          easing: Easing.linear,
          useNativeDriver: true
        }
      )
    ).start()
  }, [])

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <View style={styles.absoluteFill} >
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <AntDesign name="loading1" size={50} color="black" />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 999,
    height: Dimensions.get('window').height - 200
  }
})

export default LoadMap
