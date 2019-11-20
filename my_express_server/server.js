const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello this is working");
});

app.get("/contact", function(req,res){
    res.send("Contact me at: nikhilrajkarnikar24@gmail.com");
});

app.get("/about", function(req,res){
    res.send("My name is Nikhil Rajkarnikar and I am a BIM student. I am currently studying in St. Xaviers College, Maitighar, Kathmandu, Nepal");
});

app.get("/hobbies", function(req,res){
    res.send("<ul><li>Guitar</li><li>Food</li><li>Sleep</li></ul>");
});

app.listen(3000, function(){
    console.log("Port 3000 activated");
});