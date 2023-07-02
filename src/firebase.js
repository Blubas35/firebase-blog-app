import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxi6DYp0y9HmwtZj9xDGIVkstCKHlEXik",

  authDomain: "react-blogs-app-34f42.firebaseapp.com",

  projectId: "react-blogs-app-34f42",

  storageBucket: "react-blogs-app-34f42.appspot.com",

  messagingSenderId: "533291849052",

  appId: "1:533291849052:web:aa79a992e9d4005c81dd99",

  measurementId: "G-N0CQD3RMJ8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
