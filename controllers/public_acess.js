const data = require("../data.json")

exports.index = (req, res) => {
    res.render("recipes", { cards: data.recipes })
}

exports.about = (req, res) => {
    res.render("sobre")
}

exports.show = (req, res) => {
    const recipeIndex = req.params.index

    const foundRecipe = data.recipes.find( recipe => recipe.id == recipeIndex)

    res.render("recipe", { recipe: foundRecipe })
}

exports.login = (req, res) => {
    res.render('login')
}