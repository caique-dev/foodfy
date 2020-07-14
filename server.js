const
    express = require('express'),
    nunjucks = require('nunjucks'),
    recipes = require("./data"),

    server = express()

// ligando o servidor
server.listen(3000, () => {
    console.log("server runnig")
})

// config nunjucks
server.set("view engine", "njk")

nunjucks.configure("views", { 
    express: server,
    noCache: true,
    autoescape: false
})

// config statics
server.use(express.static("public"))

// rotas
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