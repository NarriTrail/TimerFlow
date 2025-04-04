import { View, Text } from 'react-native'
import React from 'react'
import Timer from './Timer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import History from './History';


const App = () => {
  const Stack= createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Timer' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Timer' component={Timer}/>
        <Stack.Screen name='History' component={History}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App