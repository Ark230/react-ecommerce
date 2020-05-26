import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCG91x4uuvqD5jszrVqz52xMMw9U3rVFRY",
    authDomain: "crown-clothing-db-c9043.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-c9043.firebaseio.com",
    projectId: "crown-clothing-db-c9043",
    storageBucket: "crown-clothing-db-c9043.appspot.com",
    messagingSenderId: "61217943185",
    appId: "1:61217943185:web:7457a492f6949ae2b75930",
    measurementId: "G-ZJ8X6TCRJH"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
