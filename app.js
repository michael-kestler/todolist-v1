const express = require("express");

const app = express();

//for use in place of deprecated body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const port = 3000;

app.get("/", (req, res) =>{
    res.send("Hello World!");
});








app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});