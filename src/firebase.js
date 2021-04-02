import firebase from 'firebase/app';

import 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyCgvjEIef8Dc6IHaew-wmxlf8bg9P2g8OQ",
    authDomain: "clone-46af5.firebaseapp.com",
    projectId: "clone-46af5",
    storageBucket: "clone-46af5.appspot.com",
    messagingSenderId: "783677475983",
    appId: "1:783677475983:web:a4d8f697e3c32e218bb4fa"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.auth();