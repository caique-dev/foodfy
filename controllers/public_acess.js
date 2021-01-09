const recipes = require("../data")

exports.index = (req, res) => {
    res.render("recipes", { cards: recipes })
}

exports.about = (req, res) => {
    res.render("sobre")
}

exports.show = (req, res) => {
    const recipeIndex = req.params.index

    res.render("recipe", { recipes: recipes[recipeIndex] })
}