import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgQu-q81Gs4-9HpboPrGCty9UOsDcEcKM",
  authDomain: "primecabsolutions-9567e.firebaseapp.com",
  projectId: "primecabsolutions-9567e",
  storageBucket: "primecabsolutions-9567e.appspot.com",
  messagingSenderId: "376538973129",
  appId: "1:376538973129:web:2aca50aadd181775541e18",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);