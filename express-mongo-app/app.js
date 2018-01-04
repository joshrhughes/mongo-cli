
var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  // if(allChoice == "all"){
  //   collection.find().toArray(function(err, doc){
  //     console.log(doc);
  //   });
  // } else {
  //   console.log("Aw, you don't want to see the restaurants?");
  // }
  console.log("1. Cookies Corner");
  console.log("2. The Blind Dog Cafe");
  console.log("3. Birch & Barley");
  console.log("4. Captain Cookie and the Milk Man");
  console.log("5. J's Cookies");
  var name = prompt("Type the number of a resturant and press enter to display it's info or create a new entry by typing 'new': ");
    if(name == "1"){
      collection.find({ "name": "Cookies Corner" }).toArray(function (err, doc) {
      console.log(doc);
      });
    }
    if (name == "2") {
      collection.find({ "name": "The Blind Dog Cafe" }).toArray(function (err, doc) {
        console.log(doc);
      });
    }
    if (name == "3") {
      collection.find({ "name": "Birch & Barley" }).toArray(function (err, doc) {
        console.log(doc);
      });
    }
    if (name == "4") {
      collection.find({ "name": "Captain Cookie and the Milk Man" }).toArray(function (err, doc) {
        console.log(doc);
      });
    }
    if (name == "5") {
      collection.find({ "name": "J's Cookies" }).toArray(function (err, doc) {
        console.log(doc);
      });
    }
    if (name == "new"){
      var newName = prompt("Resturant Name: ");
      var newStreet = prompt("Street Address: ");
      var newZip = prompt("Zip Code: "); 
      var newYelp = prompt("Yelp Web Address: ");
      collection.insert([{name: newName, address: {street: newStreet, zip: newZip}, yelp: newYelp}]);
      console.log("You Did It! Reboot and type 'all' to see your new addition");
    }
    if(name == "all"){
      collection.find().toArray(function(err, doc){
        console.log(doc);
      });
    }
    // else{
    //   console.log("That wasn't an option...");
    // }
});