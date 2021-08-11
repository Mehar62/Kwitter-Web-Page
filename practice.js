
//ADD YOUR FIREBASE LINKS

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA2ccCwnVa-B_sVV00gubEQs3CExw4kV_k",
    authDomain: "class-test-97b2b.firebaseapp.com",
    databaseURL: "https://class-test-97b2b-default-rtdb.firebaseio.com",
    projectId: "class-test-97b2b",
    storageBucket: "class-test-97b2b.appspot.com",
    messagingSenderId: "1024140987552",
    appId: "1:1024140987552:web:7364def30d1d33b9bccdc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser(){
    user_name = document.getElementById("User_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}