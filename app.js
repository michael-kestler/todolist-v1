const express = require("express");

const app = express();


//use ejs as view engine
app.set("view engine", "ejs");

//for use in place of deprecated body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const port = 3000;

app.get("/", (req, res) =>{
    res.render('index', )
    let today = new Date();
    let currentDay = today.getDay();

    if(currentDay === 6 || today.getDay() === 0) {
        res.write("<h1>Yay it's the weekend</h1>");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
    // res.send("Hello World!");
});








app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});