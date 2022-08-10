import firebase from 'firebase/app';
import 'firebase/auth';
import config from './config';

// Initialize Firebase
let firebaseApp;
if (firebase.apps.length === 0) {
    firebaseApp = firebase.initializeApp(config.firebase);
} else {
    firebaseApp = firebase.app()
}

// Add or Remove authentification methods here.
export const Providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
};

export const auth = firebase.auth();
export default firebaseApp;