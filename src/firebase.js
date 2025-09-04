// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfjTHtBHO3z0JRsVOkaWCVmtRPWUXo2ZM",
  authDomain: "bizzhub-284ef.firebaseapp.com",
  projectId: "bizzhub-284ef",
  storageBucket: "bizzhub-284ef.firebasestorage.app",
  messagingSenderId: "61055142984",
  appId: "1:61055142984:web:d2c75c428fd98d709e1c7d",
  measurementId: "G-YJ1ZVJWXKB"
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// authentication instance
const auth = getAuth(app);

// analytics instance (optional, for usage tracking)
const analytics = getAnalytics(app);

// export so other files fit use
export { app, auth, analytics };
