import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBOeYgtg5rgfRNH7Tir18NNDzeIypklKc",
    authDomain: "vimble.firebaseapp.com",
    databaseURL: "https://vimble.firebaseio.com",
    projectId: "vimble",
    storageBucket: "",
    messagingSenderId: "628880089254",
    appId: "1:628880089254:web:8732db5eaf3ce7be"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// get the provider from the google auth Provider method

const provider = new firebase.auth.GoogleAuthProvider();
// set your custom parameters for example you want the user to choose which google account to use
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;