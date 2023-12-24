import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyDpq-7-N5OCfodbK4s3dw8yX8ah6D_ah5g",
  authDomain: "chat-vue-4d23d.firebaseapp.com",
  projectId: "chat-vue-4d23d",
  storageBucket: "chat-vue-4d23d.appspot.com",
  messagingSenderId: "388816585450",
  appId: "1:388816585450:web:c1e6b4ed911b66e2cb0d93",
  databaseURL: `https://chat-vue-4d23d-default-rtdb.europe-west1.firebasedatabase.app/`,
};

const db = firebase.initializeApp(config);
export default db;
