import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  // your config here
  apiKey: "AIzaSyBfazfz-QJwLdDDB-C8Uum-hU7foYi6oSw",
  authDomain: "walkie-talkie-701ae.firebaseapp.com",
  databaseURL: "https://walkie-talkie-701ae.firebaseio.com",
  projectId: "walkie-talkie-701ae",
  storageBucket: "walkie-talkie-701ae.appspot.com",
  messagingSenderId: "117304825514",
  appId: "1:117304825514:web:a6b6ff2ca8634d452722d3",
  measurementId: "G-FDC7LYXKTT",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
