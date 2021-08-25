import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB88cHsfXcOyz761QPq0_4oSKOJ9BZ0UlI",
    authDomain: "test-with-react-5c0ff.firebaseapp.com",
    databaseURL: "https://test-with-react-5c0ff-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-with-react-5c0ff",
    storageBucket: "test-with-react-5c0ff.appspot.com",
    messagingSenderId: "251317291067",
    appId: "1:251317291067:web:e6d048ba1544880583341e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };