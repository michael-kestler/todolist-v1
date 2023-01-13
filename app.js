const express = require("express");

const app = express();

let items = ["Buy Food", "Cook Dinner", "Eat Dinner"];
let workItems = [];

//use ejs as view engine
app.set("view engine", "ejs");

//for use in place of deprecated body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const port = 3000;




app.get("/", (req, res) => {

    //where date goes

    res.render("list", {listTitle: day, newListItem: items});
});

app.post("/", (req, res) => {
    let item = req.body.newItem;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});



app.get("/work", (req, res) =>{
    res.render("list", {listTitle: "Work List", newListItem: workItems})
})

app.get("/about", (req, res) =>{
    res.render("about");
})



// app.post("/work",(req, res)=>{
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
//
// })






app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});