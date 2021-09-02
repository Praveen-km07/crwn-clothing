import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA-ip0KVTfm6bE2cbVPQGhAFuSem-Q5sTk",
    authDomain: "crwn-db-8939b.firebaseapp.com",
    projectId: "crwn-db-8939b",
    storageBucket: "crwn-db-8939b.appspot.com",
    messagingSenderId: "134303854394",
    appId: "1:134303854394:web:5f4d997b238416bbe52a03",
    measurementId: "G-1SNENC6XN7"
  };


  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;