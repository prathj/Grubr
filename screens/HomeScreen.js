import { View, Text, Button, TouchableOpacity, Image, DevSettings } from 'react-native'
import React, { useLayoutEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { fetchUserInfoAsync } from 'expo-auth-session'
import useAuth from '../hooks/useAuth'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-deck-swiper';
import { DUMMY_DATA } from '../food'

const HomeScreen = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const swipeRef = useRef(null);

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
        ref={swipeRef}
        containerStyle={{backgroundColor: "transparent"}}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() => {console.log("Swipe PASS");}}
          onSwipedRight={() => {console.log("Swipe MATCH");}}
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
              <View className="absolute bottom-0 bg-white w-full flex-row justify-between items-center h-20 px-6 py-2 rounded-b-xl shadow-md">
                <View>
                  <Text className="text-2xl font-bold">{card.dishName}</Text>
                  <Text>{card.type}</Text>
                </View>
              </View>

            </View>
          )}
        />
      </View>

      <View className="flex flex-row justify-evenly">
        <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()} className="items-center justify-center rounded-full w-16 h-16 bg-red-200">
          <Entypo name="cross" size={26} color='red'/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => swipeRef.current.swipeRight()} className="items-center justify-center rounded-full w-16 h-16 bg-green-200">
          <Entypo name="heart" size={26} color='green'/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen