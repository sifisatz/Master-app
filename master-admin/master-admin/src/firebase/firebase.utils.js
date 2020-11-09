import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBubsAuL4-B0gdqjiXPjmb2v9vOGS5HYVE",
    authDomain: "master-admin-409da.firebaseapp.com",
    databaseURL: "https://master-admin-409da.firebaseio.com",
    projectId: "master-admin-409da",
    storageBucket: "master-admin-409da.appspot.com",
    messagingSenderId: "381156291569",
    appId: "1:381156291569:web:14c3c38416f56d67e2ca50",
    measurementId: "G-YSD26KS34E"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;