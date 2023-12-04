import { View, Text, Button, TouchableOpacity, Image, DevSettings } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entype, Ionicons } from '@expo/vector-icons'
import { fetchUserInfoAsync } from 'expo-auth-session'
import useAuth from '../hooks/useAuth'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-deck-swiper';

const DUMMY_DATA = [
  {
    dishName: "Fried Rice",
    type: "Chinese cuisine",
    photoURL: "https://houseofnasheats.com/wp-content/uploads/2023/01/Chicken-Fried-Rice-Recipe-12-scaled.jpg",
    id: 1,
  },
  {
    dishName: "Pesto Pasta",
    type: "Italian cuisine",
    photoURL: "https://www.cookingclassy.com/wp-content/uploads/2022/02/pesto-pasta-1.jpg",
    id: 2,
  },
  {
    dishName: "Shrimp Curry",
    type: "Indonesian cuisine",
    photoURL: "https://dishingouthealth.com/wp-content/uploads/2022/08/CoconutShrimpSkillet_Styled1.jpg",
    id: 3,
  }


]

const HomeScreen = () => {
    const navigation = useNavigation();
    const { user } = useAuth();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center justify-between px-5">
        <TouchableOpacity onPress={async () => DevSettings.reload()}>
          <Ionicons name="log-out-outline" size={30} color="#42d0ff" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image className="w-16 h-16" source={require("../logo.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Matched")}>
          <Ionicons name="save-outline" size={30} color="#42d0ff" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 -mt-6">
        <Swiper 
        containerStyle={{backgroundColor: "transparent"}}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          overlayLabels={{
            left: {
              title: "Nah",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "Matched",
              style: {
                label: {
                  color: "#02d11a",
                },
              },
            },
          }}
          renderCard={card => (
            <View key={card.id} className="relative bg-white h-3/4 rounded-xl">
              <Image className="absolute top-0 h-full w-full rounded-xl" source={{ uri: card.photoURL }}  />
              <View className="absolute bottom-0 bg-white w-full flex-row justify-between items-between h-20 px-6 py-2 rounded-b-xl shadow-md">
                <View>
                  <Text className="text-2xl font-bold">{card.dishName}</Text>
                  <Text>{card.type}</Text>
                </View>
              </View>

            </View>
          )}
        />
      </View>

    </SafeAreaView>

    // <View>
    //   <Text>clean HomeScreen</Text>
    //   <Button title="Go to Matched Screen" onPress={() => navigation.navigate('Matched')} />
    //   <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    // </View>
  )
}

export default HomeScreen