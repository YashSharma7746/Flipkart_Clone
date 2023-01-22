import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwMV10kJD7ezdmfBgs6CfnXTIDj1tXrZM",
  authDomain: "vip-mart-auth.firebaseapp.com",
  projectId: "vip-mart-auth",
  storageBucket: "vip-mart-auth.appspot.com",
  messagingSenderId: "802431711488",
  appId: "1:802431711488:web:f62933d222ae5a94105be5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const storage=getStorage();

export const provider=new GoogleAuthProvider()

export default app