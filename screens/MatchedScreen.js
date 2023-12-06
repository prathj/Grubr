import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useMatched } from '../MatchedContext';

const MatchedScreen = () => {
  const { matchedCards } = useMatched();
  const [open, setOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const items = matchedCards.map((card) => ({ label: card.dishName, value: card.dishName }));

  const selectedCard = matchedCards.find((card) => card.dishName === selectedDish);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <DropDownPicker
        open={open}
        value={selectedDish}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedDish}
        setItems={() => {}}
        placeholder="Select a Dish"
      />

      {selectedCard && (
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>{selectedCard.dishName}</Text>
          <Text style={{ fontSize: 14, marginBottom: 8 }}>{selectedCard.type}</Text>
          <Image source={{ uri: selectedCard.photoURL }} style={{ width: '100%', height: 200, borderRadius: 8, marginBottom: 16 }} />

          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>Ingredients:</Text>
          {selectedCard.ingredients.map((ingredient, index) => (
            <Text key={index}>{ingredient}</Text>
          ))}

          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>Recipe Instructions:</Text>
          {selectedCard.recipeInstructions.map((instruction, index) => (
            <Text key={index}>{instruction}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default MatchedScreen;