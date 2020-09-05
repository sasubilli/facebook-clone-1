import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBJgPOx8SEsw0OOQRcpRiuWooihqw0MNN4",
    authDomain: "facebook-clone-b9d6e.firebaseapp.com",
    databaseURL: "https://facebook-clone-b9d6e.firebaseio.com",
    projectId: "facebook-clone-b9d6e",
    storageBucket: "facebook-clone-b9d6e.appspot.com",
    messagingSenderId: "224184349022",
    appId: "1:224184349022:web:5ee5f5373e13b5a4b15fcf",
    measurementId: "G-N118QRY5KJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
