import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMQXYYXM3cP3y0vBHO0lOTZPnqzmuBX10",
  authDomain: "fir-c6518.firebaseapp.com",
  projectId: "fir-c6518",
  storageBucket: "fir-c6518.appspot.com",
  messagingSenderId: "1063014468608",
  appId: "1:1063014468608:web:370224a25b5ead9ca91ce5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
