const express = require("express");

const app = express();


//use ejs as view engine
app.set("view engine", "ejs");

//for use in place of deprecated body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const port = 3000;

app.get("/", (req, res) => {
    res.render('index',)
    let today = new Date();
    // let currentDay = today.getDay();

    //object that formats day
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options)



    res.render("list", {
        kindOfDay: day
    });
});










app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});