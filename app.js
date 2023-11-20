const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

const heureMiddleware = (req, res, next) => {
  const heureActuelle = new Date().getHours();
  console.log(jourActuel);
  if (heureActuelle >= 9 && heureActuelle < 17) {
    next();
  } else {
    res.status(403).send('Accès refusé en dehors des heures spécifiées.');
  }
};
app.use(heureMiddleware);

// Home page route
app.get("/", (req, res) => {
  res.render("index",{title:'Home'});
});

// About page route
app.get("/about", (req, res) => {
  res.render("about",{name:'Biggy', title:'About'});
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur interne du serveur.');
});

app.listen(3000);