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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if user object does not exits which means it is null
    if(!userAuth) return;
    // if not null then get the user from the users/ 
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    // after getting the user get the user snapshot which tell us the additional meta data about the user
    const userSnapshot=await userRef.get();
    console.log(userSnapshot.data());
    // if the user does not exists
    if(!userSnapshot.exists){
        // get the display name and the email from the user auth object
        const { email } = userAuth;
        const createdAt = new Date();

        try{
            // this will create the user if it is not there
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            });
        }
        catch(err){
            console.log("error creating a new user in firebase-util.js " + err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// get the provider from the google auth Provider method

const provider = new firebase.auth.GoogleAuthProvider();
// set your custom parameters for example you want the user to choose which google account to use
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;