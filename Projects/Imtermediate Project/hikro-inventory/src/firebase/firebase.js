import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAeUe-O6785qdEdZXlg8hzK0kkd7v5L5E",
    authDomain: "hikro-inventory.firebaseapp.com",
    projectId: "hikro-inventory",
    storageBucket: "hikro-inventory.firebasestorage.app",
    messagingSenderId: "1044755073885",
    appId: "1:1044755073885:web:fe3077f4d3f13f561bf6b4",
    measurementId: "G-NW02WK1KVN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
