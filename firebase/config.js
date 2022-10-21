import firebase from "firebase/app";
import 'firebase/auth'

if (!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        storageBucket: "admin-templete-6c4a3.appspot.com",
        messagingSenderId: "909168595478",
        appId: "1:909168595478:web:36b6566ecafd070f36db37"
    })
}

export default  firebase