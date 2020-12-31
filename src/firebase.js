// npm i firebase

import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLIvb40_3KdtQP94liwkFaW3ILpllyQV4",
  authDomain: "e-replica.firebaseapp.com",
  databaseURL: "https://e-replica.firebaseio.com",
  projectId: "e-replica",
  storageBucket: "e-replica.appspot.com",
  messagingSenderId: "572564444522",
  appId: "1:572564444522:web:01ed51d240e1663bb5c113",
  measurementId: "G-03JPWFTZ7J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db, auth} 