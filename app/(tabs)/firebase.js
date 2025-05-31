import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBPvY1HFqFiUlWTG7b95GWlgF1htmAbzAo",
  authDomain: "planner-52ccc.firebaseapp.com",
  projectId: "planner-52ccc",
  storageBucket: "planner-52ccc.firebasestorage.app",
  messagingSenderId: "587090916347",
  appId: "1:587090916347:web:edd7e7c6939762aad4515e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };