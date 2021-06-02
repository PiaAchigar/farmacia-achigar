import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBA70i8gOqadl4Boozq_mX8uNKL7awcgG8",
  authDomain: "hunko-farmacia.firebaseapp.com",
  projectId: "hunko-farmacia",
  storageBucket: "hunko-farmacia.appspot.com",
  messagingSenderId: "954528442338",
  appId: "1:954528442338:web:e9a9a32c4aa6e680bffbbb",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

//desde aca se accede a los distintos servicios y funcionalidades de firebas ej : firebase.autentication(app)
