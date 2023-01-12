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
    let day;

    // if(currentDay === 6 || today.getDay() === 0) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";
    // }
    // res.send("Hello World!");

    switch(currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
        break;

    }
    res.render("list", {kindOfDay: day});

});








app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});