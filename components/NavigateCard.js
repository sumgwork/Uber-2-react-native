import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`py-5 text-center text-lg font-semibold`}>
        Good morning, John
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={300}
            placeholder="Where to?"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
              )
              navigate('RideOptionsCard')
            }}
            fetchDetails={true}
            returnKeyType="search"
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            styles={styles.inputBox}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({
  inputBox: {
    container: {
      backgroundColor: 'white',
      paddingTop: 20,
      flex: 0,
    },
    textInput: {
      backgroundColor: '#DDDDDF',
      borderRadius: 0,
      fontSize: 16,
    },
    textInputContainer: {
      paddingHorizontal: 20,
      paddingBottom: 0,
    },
  },
})
