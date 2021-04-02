import firebase from 'firebase/app';

import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyB0WaG8QhktU6NpvI9xLdpjAPmDbyvF89o",
//     authDomain: "clone-1e430.firebaseapp.com",
//     projectId: "clone-1e430",
//     storageBucket: "clone-1e430.appspot.com",
//     messagingSenderId: "147479076271",
//     appId: "1:147479076271:web:b5d53dde3a39e41db7a35a"
//   };

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    authDomain: "clone-46af5.firebaseapp.com",
    projectId: "clone-46af5",
    storageBucket: "clone-46af5.appspot.com",
    messagingSenderId: "783677475983",
    appId: "1:783677475983:web:a4d8f697e3c32e218bb4fa"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.auth();