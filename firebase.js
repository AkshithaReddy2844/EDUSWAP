import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcGTMI3xOfKAHSpdqAY3QOVH9dkSX3AHI",
  authDomain: "eduswap-4997d.firebaseapp.com",
  projectId: "eduswap-4997d",
  storageBucket: "eduswap-4997d.firebasestorage.app",
  messagingSenderId: "12155242128",
  appId: "1:12155242128:web:9e91108fead54df6a8ba15"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };

