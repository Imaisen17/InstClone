import firebase from "firebase";



firebase.initializeApp(  {
    apiKey: "AIzaSyDaDJkGQ4-Ja8S7IjluUmNTNN-Hmuqi0uE",
    authDomain: "instclone-95fb5.firebaseapp.com",
    projectId: "instclone-95fb5",
    storageBucket: "instclone-95fb5.appspot.com",
    messagingSenderId: "689338559833",
    appId: "1:689338559833:web:bc9dba1cb1f01d4243b048",
    measurementId: "G-KNTPKC0S0B"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};