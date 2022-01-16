var  firebaseConfig = {
      apiKey: "AIzaSyAZteaR2CeF4b25K1XDXlSkWr_G32FnlUo",
      authDomain: "panjim-9hfm.firebaseapp.com",
      databaseURL: "https://panjim-9hfm-default-rtdb.firebaseio.com",
      projectId: "panjim-9hfm",
      storageBucket: "panjim-9hfm.appspot.com",
      messagingSenderId: "897639154689",
      appId: "1:897639154689:web:b53017acd58b7f979bec00"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
