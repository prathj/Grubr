import { View, Text, Button, DevSettings } from 'react-native'
import React from 'react'
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>clean Settings</Text>
        <Button title="Sign out" onPress={async () => DevSettings.reload()} />
    </View>
  );
};

export default Settings