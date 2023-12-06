import { View, Text, Button, TouchableOpacity, Image, DevSettings } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { fetchUserInfoAsync } from 'expo-auth-session'
import useAuth from '../hooks/useAuth'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-deck-swiper';
import { DUMMY_DATA } from '../food'
import { useMatched } from '../MatchedContext';

const HomeScreen = ({route}) => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const swipeRef = useRef(null);
    const { matchedCards, addMatchedCard } = useMatched();
    const [showSwiper, setShowSwiper] = useState(true);
  
    const { filters } = route.params || { filters: [] };

    const applyFilters = (data) => {
      if (filters.length === 0) {
        return data;
      }
  
      const filteredData = data.filter((item) =>
        filters.some((filter) => item.tags.includes(filter))
      );
  
      return filteredData.sort((a, b) => {
        const tagsA = a.tags.filter((tag) => filters.includes(tag));
        const tagsB = b.tags.filter((tag) => filters.includes(tag));
        return tagsB.length - tagsA.length;
      });
    };
  
    const filteredAndSortedData = applyFilters(DUMMY_DATA);
    
    useEffect(() => {
      if (matchedCards) {
        console.log('Matched Card:', matchedCards);
      }
    }, [matchedCards]);
    
  const handleSwipeRight = (card) => {
    console.log("Swipe MATCH");
    addMatchedCard(card);
  };

  const handleSwipedAll = () => {
    console.log('No more cards left');
    setShowSwiper(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1" style={{ paddingBottom: 2 }} >
      <View className="flex-row items-center justify-between px-5">
        <TouchableOpacity onPress={async () => DevSettings.reload()}>
          <Ionicons name="log-out-outline" size={30} color="#42d0ff" />
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate("Filters")}>
          <Image className="w-16 h-16" source={require("../logo.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Matched")}>
          <Ionicons name="save-outline" size={30} color="#42d0ff" />
        </TouchableOpacity>
      </View>

      {showSwiper && filteredAndSortedData.length > 0 ? (
        <View className="flex-1 -mt-8">
          <Swiper
            ref={swipeRef}
            containerStyle={{ backgroundColor: 'transparent' }}
            cards={filteredAndSortedData}
            stackSize={5}
            cardIndex={0}
            animateCardOpacity
            verticalSwipe={false}
            onSwipedLeft={() => {
              console.log('Swipe PASS');
            }}
            onSwipedRight={(index) => handleSwipeRight(filteredAndSortedData[index])}
            onSwipedAll={handleSwipedAll}
            overlayLabels={{
              left: {
                title: 'Nah',
                style: {
                  label: {
                    textAlign: 'right',
                    color: 'red',
                  },
                },
              },
              right: {
                title: 'Matched',
                style: {
                  label: {
                    color: '#02d11a',
                  },
                },
              },
            }}
            renderCard={(card) => (
              <View key={card.id} className="relative bg-white h-4/5 rounded-xl">
                <Image className="absolute top-0 h-full w-full rounded-xl" source={{ uri: card.photoURL }} />
                <View className="absolute bottom-0 bg-white w-full flex-row justify-between items-center h-20 px-6 py-2 rounded-b-xl shadow-md">
                  <View>
                    <Text className="text-2xl font-bold">{card.dishName}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text>{card.type}</Text>
                      <Text style={{ marginLeft: 5, marginRight: 5 }}>{/* Add space between type and tag */}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        {(Array.isArray(card.tags) ? card.tags : [card.tags]).map((tag, index) => (
                            <View key={index} style={{ backgroundColor: '#F9A825', borderRadius: 999, padding: 5, marginRight: 5 }}>
                                <Text style={{ color: '#FFFFFF' }}>{tag}</Text>
                            </View>
                        ))}
                    </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No more dishes to see</Text>
        </View>
      )}

      <View className="flex flex-row justify-evenly">
      <TouchableOpacity
          onPress={showSwiper ? () => swipeRef.current.swipeLeft() : null}
          className={`items-center justify-center rounded-full w-16 h-16 ${showSwiper ? 'bg-red-200' : 'bg-gray-200'}`}
        >
          <Entypo name="cross" size={26} color={showSwiper ? 'red' : 'gray'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={showSwiper ? () => swipeRef.current.swipeRight() : null}
          className={`items-center justify-center rounded-full w-16 h-16 ${showSwiper ? 'bg-green-200' : 'bg-gray-200'}`}
        >
          <Entypo name="heart" size={26} color={showSwiper ? 'green' : 'gray'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
