//jshint esversion:6

// we initialise express to set it up
const express = require("express");

//this incoorporates body parser into our code
var bodyParser = require('body-parser');

const app = express();

//this is how we use to body parser to grab inputs from the user into our servers 

app.use(bodyParser.urlencoded({extended:true}));


// this is used to send the whole file and (__dirname) is just the path where the html file exists

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//this is to used to post something onto the browser and allows user to see content when request happens

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send(`The result of the calculation is ${result}`);
});



// // just me goofing around and testing if this works
// app.get("/wazzaa", function(req, res){
//     res.send("yoooooo. look at these booooomers")
// });

// this listens to that port to show any that our server is running on that port 

app.listen(3000, function(){
    console.log("my calculator server is up and  running on port 3000!!");
});



