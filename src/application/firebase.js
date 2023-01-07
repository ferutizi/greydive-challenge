import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
/* import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'; */

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_PROYECT_ID + '.firebaseapp.com',
    projectId: REACT_APP_PROYECT_ID,
    storageBucket: REACT_APP_PROYECT_ID + '.appspot.com',
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

/* setPersistence(auth, browserLocalPersistence); */