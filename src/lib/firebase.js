// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA87swuPpPCUAsquetWguJEdzKM76m6o8",
  authDomain: "brown-open-silicon.firebaseapp.com",
  projectId: "brown-open-silicon",
  storageBucket: "brown-open-silicon.firebasestorage.app",
  messagingSenderId: "651635407635",
  appId: "1:651635407635:web:9d4290e7b67448f56bf8e6",
  measurementId: "G-3MBMY39BJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
export const db = getFirestore(app);

// Function to submit interest form data to Firestore
export const submitInterestForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "interested"), {
      name: formData.name,
      email: formData.email,
      year: formData.year,
      interests: formData.interests,
      message: formData.message || null,
      timestamp: serverTimestamp(),
      source: formData.source || "website_form"
    });
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: e.message };
  }
};