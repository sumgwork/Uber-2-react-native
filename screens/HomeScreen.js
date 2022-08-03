import React from 'react'
import { Text, SafeAreaView, View, Image, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'

const HomeScreen = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
          style={styles.image}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
          placeholder="Where from"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }),
            )

            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType="search"
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          styles={styles.autocomplete}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  autocomplete: {
    container: {
      flex: 0,
    },
    textInput: {
      fontSize: 16,
    },
  },
})
