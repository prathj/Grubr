import { View, Text, Button } from 'react-native'
import React from 'react'

const LoginScreen = ({promptAsync}) => {
  
  return (
    <View className="flex-1 items-center justify-center">
      <Text>clean LoginScreen</Text>
      <Button title="Sign in with Google" onPress={() => promptAsync()} />
    </View>
  )
}

export default LoginScreen;