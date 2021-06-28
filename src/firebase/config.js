import firebase from "firebase";

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyAQSdlEFyuPCjaPR-22G7waCCS4Ts0E0Rc",
    authDomain: "chat-app-66e88.firebaseapp.com",
    projectId: "chat-app-66e88",
    storageBucket: "chat-app-66e88.appspot.com",
    messagingSenderId: "421026615624",
    appId: "1:421026615624:web:f227e85a8ba928b65de37d",
    measurementId: "G-38SWCHM0JL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if(window.location.hostname === 'localhost'){
  db.useEmulator('localhost','8080')
}

export { db, auth};
export default firebase;