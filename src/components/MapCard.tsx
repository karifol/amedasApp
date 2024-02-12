import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const MapCard = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 35.681236,
          longitude: 139.767125,
          latitudeDelta: 1,
          longitudeDelta: 1
        }}
      >
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 200,
    marginTop: 10
  },
  mapStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  }
})

export default MapCard
