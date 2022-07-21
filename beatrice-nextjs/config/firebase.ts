import firebase from 'firebase/app';
import * as Auth from "firebase/auth";
import "firebase/compat/auth";
import config from './config';

// Initialize Firebase
let firebaseApp: firebase.FirebaseApp;
if (firebase.getApps.length === 0) {
    firebaseApp = firebase.initializeApp(config.firebase);
} else {
    firebaseApp = firebase.getApp()
}

// Add or Remove authentification methods here.
export const Providers = {
    google: new Auth.GoogleAuthProvider(),
    facebook: new Auth.FacebookAuthProvider(),
};

export const auth = Auth.getAuth()
export default firebaseApp;