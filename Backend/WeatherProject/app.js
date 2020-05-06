const express = require("express");

const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");

});

app.post('/', function(req, res){
  const city = req.body.CityName;
  const apiKey = "e72ca729af228beabd5d20e3b7749713";
  const URL="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;


  https.get(URL, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      //console.log(data);
      const weatherData = JSON.parse(data);
      const windSpeed = weatherData.wind.speed;
      const icon = weatherData.weather[0].icon;
      const iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      //console.log(windSpeed);
      const weatherDescription = weatherData.weather[0].description;
      res.write("<h1>Weather in "+city+" is "+weatherDescription +" today.</h1>")
      res.write("<p> Wind spped is "+windSpeed+"</p>");
      res.write("<center><img src = "+iconURL+"></center>");
      res.send();
    });
  });
});


app.listen(3000, function(){
  console.log("server is running fine on port 3000");
});
