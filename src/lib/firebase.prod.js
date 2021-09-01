import Firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// v9 compat packages are API compatible with v8 code
import 'firebase/firestore';
import 'firebase/auth';
//we need to seed the database
// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed'


// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCfjQepBmguCNFsU-eh_TqNsL5yrlAoRI0",
    authDomain: "netflix-yana.firebaseapp.com",
    projectId: "netflix-yana",
    storageBucket: "netflix-yana.appspot.com",
    messagingSenderId: "946394942833",
    appId: "1:946394942833:web:af8b907c54e16d1d31bad0"
}
const firebase = Firebase.initializeApp(config)
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase)
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data



export { firebase }