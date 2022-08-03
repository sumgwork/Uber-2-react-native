import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '124',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
]

const NavOptions = () => {
  const { navigate } = useNavigation()

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-4 bg-gray-200 m-2`}
            onPress={() => navigate(item.screen)}
          >
            <View style={styles.button}>
              <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={tw`text-lg font-semibold mt-2`}>{item.title}</Text>
              <Icon
                color="white"
                name="arrowright"
                style={tw`p-2 bg-black mt-4 rounded-full w-10`}
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    width: 120,
  },
})
