import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB_XAXC6xRpE7Wt9bgO3W-jjO9qH9CdNrY",
  authDomain: "shoviiadmin.firebaseapp.com",
  projectId: "shoviiadmin",
  storageBucket: "shoviiadmin.appspot.com",
  messagingSenderId: "716382872250",
  appId: "1:716382872250:web:f736b3e5cf18ec5fcb5883"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, app, storage};
