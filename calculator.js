//jshint esversion:6

// we initialise express to set it up
const express = require("express");

const app = express();

// this is used to send the whole file and (__dirname) is just the path where the html file exists

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//this is to used to post something onto the browser and allows user to see content when request happens

app.post("/", function(req, res){
    res.send(" keeping moving nothind to seee here!!!");
});

// just me goofing around and testing if this works
app.get("/wazzaa", function(req, res){
    res.send("yoooooo. look at these booooomers")
});

app.listen(3000, function(){
    console.log("my calculator server is up and  running on port 3000!!");
});



