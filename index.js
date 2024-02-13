//importing importent modules from node-module.
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

//creating app 
const app = express();
const port = 3000;

//connecting static files
app.use(express.static("public"));

//rendering the homepage.
app.get("/",(req,res)=>{
    res.render("index.ejs");
})


//listening to the express server.
app.listen(port,()=>{
    console.log(`Server starting at port ${port}`);
})