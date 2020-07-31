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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth){
      console.log("rejected");
      return;
    }

    const userReference = firestore.doc(`users/${userAuth.uid}`);
    // console.log("some user ref", userReference);
    const snapShot = await userReference.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        
        await userReference.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch(e){
        console.log("error creating user", e);
      }
    }
  
      return userReference;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
 

  //method for creating any new collections and documents
  export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);

    })

    return await batch.commit();

  }


export const convertCollectionSnapshotToMap = (collections) => {
  
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      id: doc.id, 
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    }

  })
  //transform array into an object assigning the title as its name
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator; 
  },{})

}



  export default firebase;
