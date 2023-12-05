import * as React from 'react';
import { Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowswer from "expo-web-browser";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';

// WebBrowswer.maybeCompleteAuthSession();

export default function App() {

  // const [userInfo, setUserInfo] = React.useState();
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   iosClientId: '184146420212-ub2t05hp5edre91vj5fm476uh7lbbval.apps.googleusercontent.com',
  //   androidClientId:''
  // });

  // React.useEffect(() => {
  //   if (response?.type == "success") {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(auth, credential);
  //   }
  // }, [response]);

  // React.useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       console.log(JSON.stringify(user, null, 2));
  //       setUserInfo(user);
  //     } else {
  //       console.log("User is not authenticated")
  //     }
  //   });

  //   return () => unsub();
  // }, []);

  return (
    <NavigationContainer>
      
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
      
    </NavigationContainer>
  );

  // return userInfo ? 
  // (<NavigationContainer>
  //   <AuthProvider>
  //     <StackNavigator />
  //   </AuthProvider>
  // </NavigationContainer>) : <LoginScreen promptAsync={promptAsync} />;
};