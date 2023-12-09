const express = require("express");
const app= express();
const path=require("path");


const port=8080;
app.set("view engine", "ejs");
// agr hum server ko bahar se start krte hai to ye ye views ko kabhi dhunch ni payega to isse bachnen ke liye hum path ka usekrte hai 
app.set("views", path.join(__dirname,"/views"));


app.get("/hello", (req,res)=>{
    console.log("HELLO");
});


app.get("/", (req,res)=>{
    res.render("home.ejs");
});



app.listen(port,()=>{
    console.log(`the server in listening on this port ${port}`);
});