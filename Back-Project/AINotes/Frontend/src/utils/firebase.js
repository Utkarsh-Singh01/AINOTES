import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-aa6a3.firebaseapp.com",
  projectId: "examnotesai-aa6a3",
  storageBucket: "examnotesai-aa6a3.firebasestorage.app",
  messagingSenderId: "199120171096",
  appId: "1:199120171096:web:a47f934a655611c2735a2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
