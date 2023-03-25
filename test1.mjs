// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhp7vaWxas7EKc-9iPUdNfPg2tdz-_w54",
  authDomain: "rtdb-b44bd.firebaseapp.com",
  projectId: "rtdb-b44bd",
  storageBucket: "rtdb-b44bd.appspot.com",
  messagingSenderId: "149016988683",
  appId: "1:149016988683:web:f225b5a27e3f53be860b0e",
  measurementId: "G-7WWHZQ9FWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log('Zahl: %d, String: %s', 55, 'Ein String')
// Google:
// const db = getDatabase(app, 'https://rtdb-b44bd-default-rtdb.europe-west1.firebasedatabase.app');
// Emulator:
const db = getDatabase(app, 'http://127.0.0.1:9000/?ns=rtdb-b44bd-default-rtdb');
// in firebase.json: "host": "0.0.0.0" je Emulator einfügen, dann :
// const db = getDatabase(app, 'http://192.168.178.45:9000/?ns=rtdb-b44bd-default-rtdb');
const reference = ref( db, 'Zahlen/Zahl1')

set(reference, {
  key1 : 44,
  key2 :  'text'
});

const ref2 = ref( db, 'Zahlen/Zahl1/key2')

onValue(ref2, (snapshot) => {
  console.log('ref2 = %s', snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); 

const ref3 = ref( db)
//   console.log('ref3 %o', snapshot.val()); für json Object

