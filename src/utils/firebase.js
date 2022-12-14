import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyzMp8-LKZyMYzJ-O6bwBIAApyC-xDGrc",
  authDomain: "disneyplus-clone-f63a7.firebaseapp.com",
  projectId: "disneyplus-clone-f63a7",
  storageBucket: "disneyplus-clone-f63a7.appspot.com",
  messagingSenderId: "356021084483",
  appId: "1:356021084483:web:ff6865934f7b550b310ff6",
  measurementId: "G-WNCHM5T48P",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// add auth role to user
provider.setCustomParameters({ prompt: "select_account" });
provider.role = "admin";

auth.languageCode = "it";

const db = getFirestore(app);

export { auth, app, provider };
export default db;
