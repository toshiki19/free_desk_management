import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCskFXHXb7vudNis9crqZtgN0WpS4oTb3U",
    authDomain: "free-desk-management.firebaseapp.com",
    projectId: "free-desk-management",
    storageBucket: "free-desk-management.appspot.com",
    messagingSenderId: "1015381829719",
    appId: "1:1015381829719:web:5b5fecb240e711a9ff5b12",
    measurementId: "G-QFV7FYGDE2"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
