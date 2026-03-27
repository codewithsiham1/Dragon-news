
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgV33U-4hda2Pg5l6S9QszRyRLNgvCMcQ",
  authDomain: "dragon-news-project18-89cf6.firebaseapp.com",
  projectId: "dragon-news-project18-89cf6",
  storageBucket: "dragon-news-project18-89cf6.firebasestorage.app",
  messagingSenderId: "829912189011",
  appId: "1:829912189011:web:65c3af5a7463cb4b2b5ea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;