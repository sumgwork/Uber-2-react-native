import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import EatsScreen from './screens/EatsScreen'
import MapScreen from './screens/MapScreen'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerShown: true,
            }}
          >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ title: 'Home' }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ title: 'Journey' }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{ title: 'Eat' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
