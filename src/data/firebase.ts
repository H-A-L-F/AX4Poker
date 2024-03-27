import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-epwfx4QiBhMo2PnczuUaZ9pecnnj5gE",
  authDomain: "ax4poker.firebaseapp.com",
  projectId: "ax4poker",
  storageBucket: "ax4poker.appspot.com",
  messagingSenderId: "925848927221",
  appId: "1:925848927221:web:24beffdf75909c87403ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db