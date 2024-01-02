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

//Delete
app.delete("/pokemon/:id", (req, res) => {
  const id = req.params.id
  pokemon.splice(id, 1)
  res.redirect("/pokemon")
})


//Create
app.post("/pokemon", (req, res) => {
  const newPokemon = {name: req.body.name, img: req.body.img, stats: {hp: req.body.hp}} //hp doesn't show up on page
  pokemon.push(newPokemon)
  res.redirect("/pokemon")
})

//Edit
app.get("/pokemon/:id/edit", (req, res) => {
  const id = req.params.id
  const pokeman = pokemon[id]
  res.render("pokemon/edit.ejs", {pokeman, id})
})

//Update
app.put("/pokemon/:id", (req, res) => {
  const id = req.params.id
  const body  = {name: req.body.name, img: req.body.img, stats: {hp: req.body.hp}}
  pokemon[id] = body
  res.redirect("/pokemon")
})


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
