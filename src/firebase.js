// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBnEyof6Hn0ZIcmlhl0pdyxPlQKNm6be9M",
    authDomain: "robinhood-695b0.firebaseapp.com",
    projectId: "robinhood-695b0",
    storageBucket: "robinhood-695b0.appspot.com",
    messagingSenderId: "127942491739",
    appId: "1:127942491739:web:a88afbb644413c695f097e",
    measurementId: "G-MR1Y1WZ7R9"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
    
  export default db;