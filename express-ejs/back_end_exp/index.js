const express = require('express');
const app = express();
const port = 3000
app.use(express.json());
app.use(express.static('public'))

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", {layout: false});

const {quotes} = require("./data/data.json");

app.use("/quotes", (req, res)=>{
    res.render("quotes", {title: "Quote lists", quotes})
});
app.use("/quote/:id", (req, res)=>{
    const id = req.params.id;
    const result = quotes.filter(q => q.id == id);
    res.render("quote", {title: id, result})
})
app.get('/',(req, res) =>{
     res.render('index', {name: 'Tseegii', message: "message section"})
});
app.get('/404', (req,res)=>{
    res.render('404', {error: "Oops! Error occured", img:"/error.jpeg"})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})