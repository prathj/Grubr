import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import MatchedScreen from './screens/MatchedScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { user } = useAuth();
  return (
      <Stack.Navigator>
        {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Matched" component={MatchedScreen} />
        </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
  );
};

export default StackNavigator