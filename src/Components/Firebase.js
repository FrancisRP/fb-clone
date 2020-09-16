import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB8kSfNM4MrmgRgWnGU7uscHXG8EKUlgYo",
    authDomain: "fb-clone-3d8bc.firebaseapp.com",
    databaseURL: "https://fb-clone-3d8bc.firebaseio.com",
    projectId: "fb-clone-3d8bc",
    storageBucket: "fb-clone-3d8bc.appspot.com",
    messagingSenderId: "1052194363533",
    appId: "1:1052194363533:web:f4afdd083b059086332ac4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db