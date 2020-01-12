import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyACrLC2Wq600H_lE7QoYFX_PH6AOanQY9I",
    authDomain: "foodfighters-70c7f.firebaseapp.com",
    databaseURL: "https://foodfighters-70c7f.firebaseio.com",
    projectId: "foodfighters-70c7f",
    storageBucket: "foodfighters-70c7f.appspot.com",
    messagingSenderId: "1086055054489",
    appId: "1:1086055054489:web:4225a3a1b7cb0d54e5cc08",
    measurementId: "G-Z3V1QZ3K8N"
  };
// Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
// Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
const Fire = Firebase.initializeApp(firebaseConfig);
    
export default Fire;