import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import MatchedScreen from './screens/MatchedScreen';
import Settings from './screens/Settings';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';
import FiltersScreen from './screens/FiltersScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
  >
    <Stack.Group>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Matched" component={MatchedScreen} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Group>
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Group>
  </Stack.Navigator>
  );
};

export default StackNavigator