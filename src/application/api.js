import { collection,  getDocs, addDoc } from "firebase/firestore";
import { db } from './firebase';

export const setForm = (form) => {
    addDoc(collection(db, 'form'), { form });
}

export const getForms = async () => {
    const snapshot = await getDocs(collection(db, 'form'))
    return snapshot.docs.map(doc => doc.data());
}
