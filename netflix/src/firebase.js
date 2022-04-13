import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyB4H87_mkaIWHw-LNCR7ayuukT8V6QVods",
  authDomain: "netflixclone-584ee.firebaseapp.com",
  projectId: "netflixclone-584ee",
  storageBucket: "netflixclone-584ee.appspot.com",
  messagingSenderId: "264517370189",
  appId: "1:264517370189:web:353704b7415bb9e1eef704",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;
