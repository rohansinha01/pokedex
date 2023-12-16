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
app.get("/", (req,res) => {
    res.render("pokemon/index.ejs", {pokemon})
})


// //Register the Pokedex Router
// app.use("/pokemon", pokeRouter);

//Server Listener
app.listen(3000, () => {
  console.log("listening on port 3000");
});
