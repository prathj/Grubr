import React, { createContext, useContext, useState } from 'react';

const MatchedContext = createContext();

export const MatchedProvider = ({ children }) => {
  const [matchedCards, setMatchedCards] = useState([]);

  const addMatchedCard = (card) => {
    setMatchedCards((prevCards) => [...prevCards, card]);
  };

  return (
    <MatchedContext.Provider value={{ matchedCards, addMatchedCard }}>
      {children}
    </MatchedContext.Provider>
  );
};

export const useMatched = () => {
  const context = useContext(MatchedContext);
  if (!context) {
    throw new Error('useMatched must be used within a MatchedProvider');
  }
  return context;
};