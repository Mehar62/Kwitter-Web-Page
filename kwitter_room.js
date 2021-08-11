
//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  // Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDGQj7lkoetapbMUMSzhI6Yla6nMkKzpcc",
    authDomain: "kwitter-15324.firebaseapp.com",
    databaseURL: "https://kwitter-15324-default-rtdb.firebaseio.com",
    projectId: "kwitter-15324",
    storageBucket: "kwitter-15324.appspot.com",
    messagingSenderId: "633163634439",
    appId: "1:633163634439:web:c641f74d1e21676e4017a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("Room name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomPage(this.id);'>#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  
  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function redirectToRoomPage(name){
  console.log(name);
  localStorage.setItem("room_name", name); 
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}