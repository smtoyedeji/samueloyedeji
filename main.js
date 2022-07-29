import { initializeApp } from "firebase/app";
import {
    getFirestore, 
    collection, 
    getDocs,
    addDoc,
} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyC_Jt0SUhHlFXkjg8XNu9W5uCjqTwxP_LA",
    authDomain: "myportfolio-b61ad.firebaseapp.com",
    projectId: "myportfolio-b61ad",
    storageBucket: "myportfolio-b61ad.appspot.com",
    messagingSenderId: "44378248660",
    appId: "1:44378248660:web:79a445b1028a42f8dbb241"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//initialize services
const db = getFirestore();


//feedback references
const feedbackRef = collection(db, "feedback");

//get collections
getDocs(feedbackRef)
    .then((snapshot) => {
        let feedback = [];
        snapshot.docs.forEach((doc) => {
            feedback.push({...doc.data(), id: doc.id});

        });
    })
    .catch((err) => {
        console.log(err.message);
    });


// add feedback
const feedbackForm = document.querySelector("#feedback-form");
feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addDoc(feedbackRef, {
        name: feedbackForm.fullname.value,
        email: feedbackForm.email.value,
        phone: feedbackForm.phone.value,
        message: feedbackForm.message.value,
    })
    .then(() => {
        feedbackForm.reset();
    })
    .catch((err) => {
        console.log(err.message);
    });
});