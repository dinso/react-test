import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7UN2ZRlaZplyHBYFMmNTjaLQvatIVkCk",
  authDomain: "react-test-b8229.firebaseapp.com",
  databaseURL: "https://react-test-b8229-default-rtdb.firebaseio.com",
  projectId: "react-test-b8229",
  storageBucket: "react-test-b8229.appspot.com",
  messagingSenderId: "688169050693",
  appId: "1:688169050693:web:8ce12acf1b18a0607ab92c",
  measurementId: "G-YWENXN6WW6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;