// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyAajQDEx-_EIWI0Ur1QiHWuc1v2Gq_qsRc",
  authDomain: "pupa-pet.firebaseapp.com",
  projectId: "pupa-pet",
  storageBucket: "pupa-pet.firebasestorage.app",
  messagingSenderId: "782314476536",
  appId: "1:782314476536:web:92f6d14f6c670f655abc0d"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
