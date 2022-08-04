import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'

const RideOptionsCard = () => {
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  return (
    <SafeAreaView>
      {travelTimeInformation?.duration ? (
        <View style={tw`p-2 pb-0 flex flex-row justify-around items-center`}>
          <Text style={tw`font-semibold mr-2`}>Duration</Text>
          <Text style={tw`text-lg`}>{travelTimeInformation.duration.text}</Text>
        </View>
      ) : null}
      {travelTimeInformation?.distance ? (
        <View style={tw`p-2 flex flex-row justify-around items-center`}>
          <Text style={tw`font-semibold mr-2`}>Distance</Text>
          <Text style={tw`text-lg`}>{travelTimeInformation.distance.text}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
