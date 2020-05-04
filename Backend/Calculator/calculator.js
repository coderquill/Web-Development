const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendfile(__dirname+"/index.html");
});

app.get("/about", function(req, res){
  res.send("Hiiiii");
});

app.post('/', function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var ans  = n1+n2;
  res.send("Answer is "+ans);
});

app.get("/bmicalculator", function(req, res){
  res.sendfile(__dirname+"/bmiCalculator.html");
});

app.post('/bmicalculator', function(req,res){
  var n1 = Number(req.body.weight);
  var n2 = Number(req.body.height);
  var bmi  = Math.round(n1/Math.pow(n2, 2));
  res.send("Bmi is "+bmi);
});

app.listen(3000,function(){
  console.log("server working fine");
});
