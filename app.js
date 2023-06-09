const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let choices = ["Wake Up", "Wash Up","Daily Meditation" , "Buy Food or Cook"];
let works = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
let day = date.getDay();

  res.render('lists', {currentOfDay: day, addtodos: choices});
});

app.post("/", function (req, res) {
  let choice = req.body.addtodo;
 if (req.body.lists === "Work") {
  works.push(choice);
  res.redirect("/work");
 }else{
   choices.push(choice);
   res.redirect("/");
 }



});

app.get("/about", function (req, res) {
  res.render("about");
});


app.get("/work", function (req, res) {
  res.render("lists", {currentOfDay: "Work Lists", addtodos: works});
})


app.listen(3000, function () {
  console.log("this app is currently running on port 3000");
});
