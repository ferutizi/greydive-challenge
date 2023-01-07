import { collection,  getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

export const setForm = (form) => {
    addDoc(collection(db, 'form'), { form });
}

export const getForm = async (email) => {
    const colRef = collection(db, 'form');
    const result = await getDocs(query(colRef, where('email', '==', email)));
    return result;
}
