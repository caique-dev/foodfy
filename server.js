const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", { 
    express: server,
    noCache: true,
    autoescape: false
})

server.get("/", (req, res) => {
    res.render("recipes", { cards: recipes })
})

server.get("/sobre", (req, res) => {
    res.render("sobre")
})

server.get("/recipe/:index", (req, res) => {
    const recipeIndex = req.params.index

    res.render("recipe", { recipes: recipes[recipeIndex] })
})

server.listen(3000, () => {
    console.log("server runnig")
})