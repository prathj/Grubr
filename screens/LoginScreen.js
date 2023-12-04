import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = ({promptAsync}) => {
  
  return (
    <View className="flex-1">
        <TouchableOpacity className="absolute bottom-40 w-52 pl-12 rounded-2xl mx-20">
        <Text className="font-semibold text-center" onPress={() => promptAsync()}>Sign in with Google</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen;