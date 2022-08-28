import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_4Ep2bWMPP_PFnjQ2JTUpxaVbMg3duiQ',
  authDomain: 'rps-sim.firebaseapp.com',
  projectId: 'rps-sim',
  storageBucket: 'rps-sim.appspot.com',
  messagingSenderId: '259672221012',
  appId: '1:259672221012:web:e11a4acaf14eb3004794c1',
  measurementId: 'G-F4QGQ6NQRK'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
