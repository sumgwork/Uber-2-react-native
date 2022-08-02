import React, { Component } from 'react'
import { Text, SafeAreaView, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <Image
            source={{
              uri: 'https://links.papareact.com/gzs',
            }}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
            }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default HomeScreen
