/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
var snapshot = 0
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('users/Ben').set(
    {
      age: 99,
      feet: 2,
      hair: null,
    }
  )
}
var dbData 
function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/').child('users').once('value', display, fb_readError);
  console.log("Leaving simpleRead")
}

function display(snapshot) {
   dbData = snapshot.val();
     console.log("Running display(), the message is: " + snapshot.val())
  console.log (snapshot.val())
  console.log (dbData["ref('Ben').child('feet')"])
  HTML_OUTPUT.innerHTML = dbData["feet"];


  if (dbData == null) {
    console.log('There was no record when trying to read the message');
  } else {
    console.log("The message is: " + dbData)
  }
}
function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('users').child('Ben').on('value', display, fb_readError)
}
function update() {
  firebase.database().ref('users/Ben').update(
    {
      monitary_worth: 0,
      humor: 99999999999999,
      shoe_size: null,
      
    }
  )
}
function add() {
  firebase.database().ref('users/Ben').update(
    {
    feet: dbData["feet"]+1,
    }
  )
}
function blah(snapshot){
    snapshot.forEach(dbData["feet"]+1)
    console.log ("blah")
  }
function test() {
blah()
firebase.database().ref('users/Ben').orderByValue().once('value', display, fb_readError)
}