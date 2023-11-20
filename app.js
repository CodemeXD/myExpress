const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

// Home page route
app.get("/", (req, res) => {
  res.render("index",{title:'Home'});
});

// About page route
app.get("/about", (req, res) => {
  res.render("about",{name:'Biggy', title:'About'});
});

app.listen(3000);