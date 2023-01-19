// import {initializeApp} from "firebase/app";
// import { getAuth } from "firebase/auth";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

// export const auth=getAuth(app);
// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZptYh9Ns5aYwr-jLZMYh1lK--A9byz5M",
  authDomain: "vip-mart-cdc4c.firebaseapp.com",
  projectId: "vip-mart-cdc4c",
  storageBucket: "vip-mart-cdc4c.appspot.com",
  messagingSenderId: "259784436021",
  appId: "1:259784436021:web:c41fcddbc767849082847c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
