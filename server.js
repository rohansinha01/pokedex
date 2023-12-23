//Import Express
const express = require("express");
//Import Morgan
const morgan = require("morgan");
//Import Method Override
const methodOverride = require("method-override");



// //Import the Pokemon Router
// const pokeRouter = require("./controller/pokemon.js");
//Import our Pokemon
const pokemon = require("./models/pokemon.js");

//Create App Object
const app = express();

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));

//Routes

//Index
app.get("/pokemon", (req,res) => {
    res.render("pokemon/index.ejs", {pokemon})
})

//New
app.get("/pokemon/new", (req, res) => {
  res.render("pokemon/new.ejs")
})
//Create
app.post("/pokemon", (req, res) => {
  const body = req.body
  pokemon.push(body)
  res.redirect("/pokemon")
})
//Delete

//Update

//Edit

//Show
app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id
  const pokeman = pokemon[id]
  res.render("Pokemon/show.ejs", {pokeman, id})
})

// //Register the Pokedex Router
// app.use("/pokemon", pokeRouter);

//Server Listener
app.listen(3000, () => {
  console.log("listening on port 3000");
});
