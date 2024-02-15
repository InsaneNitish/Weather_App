//importing importent modules from node-module.
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

//creating app 
const app = express();
const port = 3000;
const API_URL_1 = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_URL_2 = "?unitGroup=metric&key=LAEJN83PBSRSUAHPPMJ7X2S89&contentType=json";


//connecting static files
app.use(express.static("public"));

//using api to get the data from the server.
app.use(bodyParser.urlencoded({extended:true}));

// const x = ("#loc");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
// var lat;
// var long;
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
//   lat = position.coords.latitude;
//   long = position.coords.longitude;
// }

app.post("/",async (req,res)=>{
    const city = req.body.city;
    console.log(req.body);
    const result = await axios.get(API_URL_1 + city +  API_URL_2);
    res.locals.weather = result.data;
    console.log(result.data);
    res.render("index.ejs");

});


//rendering the homepage.
app.get("/",(req,res)=>{
    res.render("index.ejs");
})


//listening to the express server.
app.listen(port,()=>{
    console.log(`Server starting at port ${port}`);
})