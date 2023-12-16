//Import Express
const express = require("express")
//Create a router
const router = express.Router()
//Import the Pokemon data
const pokemon = require("../models/pokemon.js")

//Routes
router.get("/", (req,res) => {
    res.render("pokemon/index.ejs", { data: pokemon})
})