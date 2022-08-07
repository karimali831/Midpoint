import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import config from './config';

const firebaseApp = initializeApp(config.firebase);
const analytics = getAnalytics(firebaseApp);

export const auth = getAuth(firebaseApp);
export default firebaseApp;
