const recipes = require("../data.json")

exports.index = (req, res) => {
    res.render("recipes", { cards: recipes.recipes })
}

exports.about = (req, res) => {
    res.render("sobre")
}

exports.show = (req, res) => {
    const recipeIndex = req.params.index

    res.render("recipe", { recipes: recipes.recipes[recipeIndex] })
}

exports.login = (req, res) => {
    res.render('login')
}