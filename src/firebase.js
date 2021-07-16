import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDasEaexAvjXKlL7cFeztzZLy4h_gUUAbM",
    authDomain: "slack-clone-yt-b08d7.firebaseapp.com",
    projectId: "slack-clone-yt-b08d7",
    storageBucket: "slack-clone-yt-b08d7.appspot.com",
    messagingSenderId: "688606917852",
    appId: "1:688606917852:web:1504c6ed5654f1ea4af019"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
