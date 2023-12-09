const express = require("express");
const app= express();
const path=require("path");


const port=8080;
app.set("view engine", "ejs");
// agr hum server ko bahar se start krte hai to ye ye views ko kabhi dhunch ni payega to isse bachnen ke liye hum path ka usekrte hai 
app.set("views", path.join(__dirname,"/views"));




app.get("/", (req,res)=>{
    res.render("home.ejs");
});

app.get("/roldice", (req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    // res.render("roldice.ejs", {num:rolDice});
    res.render("roldice.ejs", {diceVal});

});

app.get("/ig/:username", (req,res)=>{
    const followers =["Amaan","javed","sahil","ali"];
    let {username}=req.params;
    res.render("instagram",{username,followers});

});


app.listen(port,()=>{
    console.log(`the server in listening on this port ${port}`);
});