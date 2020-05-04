const express = require("express");
const app = express();

app.get('/', function(req,res){
  res.send("hey!!");
});

app.get("/about", function(req, res){
  res.send("Hello, I am Rupali. Nice to meet you!");
});

app.get("/contact", function(req, res){
  res.send("contact me at coderquill@gmail.com");
});

app.get("/ugich", function(req, res){
  res.send("just checking :)");
});

app.listen(3000,function(){
  console.log("server is orking fine");
})
