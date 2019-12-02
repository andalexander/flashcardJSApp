// firebase.js
import firebase from "firebase";

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
  apiKey: "AIzaSyCXg8rPkO-zeDhBDF5yCSiDtN10n4mlkgg",
  authDomain: "js-flashcard-app.firebaseapp.com",
  databaseURL: "https://js-flashcard-app.firebaseio.com",
  projectId: "js-flashcard-app",
  storageBucket: "js-flashcard-app.appspot.com",
  messagingSenderId: "845847141861",
  appId: "1:845847141861:web:e13a76cc35d2a594bbe30c"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase

const dbRef = firebase.database().ref();

export default dbRef;
