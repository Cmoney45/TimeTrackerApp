
// Get database
let config = {
    apiKey: "AIzaSyDjc6Xk4eosw2zIHIkIQ8YndihPJFXjUrw",
    authDomain: "timetracker-1d559.firebaseapp.com",
    databaseURL: "https://timetracker-1d559.firebaseio.com",
    projectId: "timetracker-1d559",
    storageBucket: "",
    messagingSenderId: "677184614568"
  };

  // Initialize database
  firebase.initializeApp(config);

// Creat var for database to easily reference

let database = firebase.database();

// Create base names
let name = "";
let role = "";
let startdate = 0;
let rate = 0;


// Create on click event
  $(`#add-employee`).on('click', function(event){
      event.preventDefault();

      name = $(`#name`).val().trim();
      role = $(`#role`).val().trim();
      date = $(`#date`).val().trim();
      rate = $(`#rate`).val().trim();


      database.ref().push({
          name: name,
          role: role,
          date: date,
          rate: rate,
      })
  })