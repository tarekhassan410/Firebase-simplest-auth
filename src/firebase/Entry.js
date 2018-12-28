import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCjwsUoJ0AOaa1yXErvfDjGtpLOtR-zHIE",
  authDomain: "tutor-3abbc.firebaseapp.com",
  databaseURL: "https://tutor-3abbc.firebaseio.com",
  projectId: "tutor-3abbc",
  storageBucket: "tutor-3abbc.appspot.com",
  messagingSenderId: "1078354692549"
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const firebaseEntry = firebase;

export default firebaseEntry;
