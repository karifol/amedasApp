import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useState, useEffect } from 'react'
import fetchTable from '../utils/fetchTable'

interface Table {
  id: string
  latitude: number
  longitude: number
  kjName: string
  type: string
}

interface Props {
  setPlace: (place: { id: number, name: string }) => void
  setIsLoading: (isLoading: boolean) => void
}

const MapCard = (props: Props): JSX.Element => {
  const { setPlace, setIsLoading } = props
  const [table, setTable] = useState([] as Table[])
  const [region, setRegion] = useState({
    latitude: 35.6731,
    longitude: 139.7613,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5
  })

  useEffect(() => {
    fetchTable()
      .then((data) => {
        setTable(data as Table[])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const styleObj = {
    A: styles.markerKansyo,
    B: styles.markerKansyo,
    C: styles.marker,
    F: styles.marker,
    E: styles.marker,
    G: styles.marker,
    D: styles.marker
  }

  const markerTextObj = {
    A: styles.markerTextKansyo,
    B: styles.markerTextKansyo,
    C: styles.markerText,
    F: styles.markerText,
    E: styles.markerText,
    G: styles.markerText,
    D: styles.markerText
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
      >
        {
          table.map((data) => {
            const type = data.type as keyof typeof styleObj
            if ((region.latitudeDelta > 3) && ['C', 'F', 'E', 'G', 'D'].includes(type)) return null
            if ((region.latitudeDelta > 5) && (type === 'B')) return null
            return (
              <Marker
                key={data.id}
                coordinate={{
                  latitude: data.latitude,
                  longitude: data.longitude
                }}
                onPress={() => {
                  setIsLoading(true)
                  setPlace({ id: Number(data.id), name: data.kjName })
                }}
              >
                <TouchableOpacity style={styleObj[type]}>
                  <Text style={markerTextObj[type]}>{data.kjName}</Text>
                </TouchableOpacity>
              </Marker>
            )
          })
        }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 300,
    marginTop: 10
  },
  mapStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  marker: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1
  },
  markerKansyo: {
    backgroundColor: 'rgb(255, 133, 177)',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1
  },
  markerText: {
    color: 'black'
  },
  markerTextKansyo: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default MapCard
