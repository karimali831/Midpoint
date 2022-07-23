import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import config from './config';

// Initialize Firebase
const firebaseApp = initializeApp(config.firebase);

export const auth = getAuth(firebaseApp);
export default firebaseApp;
