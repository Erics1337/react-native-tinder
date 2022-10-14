// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBYiwcsUkYBMrgi8szewnNe1ZHLLZfdHXM',
	authDomain: 'fireship-lessons-8324d.firebaseapp.com',
	projectId: 'fireship-lessons-8324d',
	storageBucket: 'fireship-lessons-8324d.appspot.com',
	messagingSenderId: '412753396653',
	appId: '1:412753396653:web:ee6eff7abab293abbc9724',
}

// Singleton pattern shown here
// Initialize objects once only in one place and access it outside of the file 

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { app, auth, db }