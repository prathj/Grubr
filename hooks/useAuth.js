import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowswer from "expo-web-browser";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';

const AuthContext = createContext({});
WebBrowswer.maybeCompleteAuthSession();

export const AuthProvider = ({ children }) => {
  
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '184146420212-ub2t05hp5edre91vj5fm476uh7lbbval.apps.googleusercontent.com',
    androidClientId:''
  });

  React.useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        console.log("User is not authenticated")
      }
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{
      user: userInfo,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}