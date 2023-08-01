//Require express
const express = require("express");

//Create Express Server
const app = express();

//Create Routes
app.use(express.static("public"));

app.get("/home",(req,res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/about",(req,res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works",(req,res) => {
    res.sendFile(__dirname + "/views/works.html")
})

//Start Server
app.listen(3000, () => console.log("Listening in PORT 3000"));

