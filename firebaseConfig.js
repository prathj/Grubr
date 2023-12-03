import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaLnXjbTa50OaKmdht5IXl1RBrWaHrkcM",
  authDomain: "grubr-43e82.firebaseapp.com",
  projectId: "grubr-43e82",
  storageBucket: "grubr-43e82.appspot.com",
  messagingSenderId: "184146420212",
  appId: "1:184146420212:web:3bcaa251b0d9aa2c3cd9a1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//ios: 184146420212-ub2t05hp5edre91vj5fm476uh7lbbval.apps.googleusercontent.com