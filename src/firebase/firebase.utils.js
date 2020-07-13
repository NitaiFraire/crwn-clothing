import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCShIWaMM0lozEzi6Gxi0MkUd0pGPegj8Y",
    authDomain: "crwn-db-fe786.firebaseapp.com",
    databaseURL: "https://crwn-db-fe786.firebaseio.com",
    projectId: "crwn-db-fe786",
    storageBucket: "crwn-db-fe786.appspot.com",
    messagingSenderId: "56408736418",
    appId: "1:56408736418:web:d8e61886dbe1b3bd964dfb",
    measurementId: "G-90TZK0H6NC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;