import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyC6r6kf5X-RvVP3PTAszCO5LZcZJrXckWA",
  authDomain: "eclothing-4f075.firebaseapp.com",
  databaseURL: "https://eclothing-4f075.firebaseio.com",
  projectId: "eclothing-4f075",
  storageBucket: "eclothing-4f075.appspot.com",
  messagingSenderId: "15461011693",
  appId: "1:15461011693:web:350bd590009b96b5e67ce4",
  measurementId: "G-P538RGEJL1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;