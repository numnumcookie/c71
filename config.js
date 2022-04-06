import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDIjt3_tFKeG-R_m6f1W5Lm-ODyiPAYunc",
    authDomain: "c-71-d0027.firebaseapp.com",
    projectId: "c-71-d0027",
    storageBucket: "c-71-d0027.appspot.com",
    messagingSenderId: "373199291890",
    appId: "1:373199291890:web:727ab841109a11c856976b"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
