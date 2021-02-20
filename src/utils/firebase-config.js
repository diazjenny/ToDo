import firebaseAuth from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMPYX0LrL-3VJ85m2vLrsm9FsU51-NdPY",
    authDomain: "todotask-42572.firebaseapp.com",
    databaseURL: "https://todotask-42572-default-rtdb.firebaseio.com",
    projectId: "todotask-42572",
    storageBucket: "todotask-42572.appspot.com",
    messagingSenderId: "767680632377",
    appId: "1:767680632377:web:8882081fb2a6e886d11fe8"
};

firebaseAuth.initializeApp(firebaseConfig);

export { firebaseConfig }