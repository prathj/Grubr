import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <View>
      <Text>clean HomeScreen</Text>
      <Button title="Go to Matched Screen" onPress={() => navigation.navigate('Matched')} />
    </View>
  )
}

export default HomeScreen