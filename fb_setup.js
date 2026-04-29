/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/  
const firebaseConfig = {
    apiKey: "AIzaSyDdgYYt_2atKFvwO0U9pIHQwOp1rTIfmlU",
    authDomain: "aydin-green-12comp.firebaseapp.com",
    databaseURL: "https://aydin-green-12comp-default-rtdb.firebaseio.com",
    projectId: "aydin-green-12comp",
    storageBucket: "aydin-green-12comp.firebasestorage.app",
    messagingSenderId: "114190641424",
    appId: "1:114190641424:web:c95f80fb759b1b72535d95"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
