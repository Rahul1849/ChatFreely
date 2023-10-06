import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5V6UBHHYrGtwzyDZJwlRj6XHLte9CCHc",
  authDomain: "chat-42c2f.firebaseapp.com",
  projectId: "chat-42c2f",
  storageBucket: "chat-42c2f.appspot.com",
  messagingSenderId: "164230376043",
  appId: "1:164230376043:web:92a3da3058c711a6e11f2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
