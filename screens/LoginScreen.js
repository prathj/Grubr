import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const LoginScreen = ({ promptAsync }) => {
  return (
    <View className="flex-1 items-center justify-center">
      {/* Logo Placeholder */}
      <Image
        source={require('../logo.png')} // Update with the actual path to your logo
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />

      <Text className="text-3xl font-bold mb-6">Welcome to Grubr</Text>

      <TouchableOpacity
        className="bg-blue-500 py-3 px-6 rounded-full"
        onPress={() => promptAsync()}
      >
        <Text className="text-white font-bold text-lg">
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
