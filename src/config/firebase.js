import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAd1hN82j8FUv3pQbv-KGlWubAXS6JEQt0",
    authDomain: "file-management-system-6cf66.firebaseapp.com",
    projectId: "file-management-system-6cf66",
    storageBucket: "file-management-system-6cf66.appspot.com",
    messagingSenderId: "549523863795",
    appId: "1:549523863795:web:6b15a89fc953bdf4555f86"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;