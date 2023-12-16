//Import Express
const express = require("express")
//Import Morgan
const morgan = require("morgan")
//Import Method Override
const methodOverride = require("method-override")
//Create App Object
const app = express()

//Middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use(methodOverride("_method"))

//Server Listener
app.listen(3000, () => {
    console.log('listening on port 3000')
})