const express = require('express')

const routes = express.Router()
const recipes = require("./data")

routes.get("/", (req, res) => {
    res.render("recipes", { cards: recipes })
})

routes.get("/sobre", (req, res) => {
    res.render("sobre")
})

routes.get("/recipe/:index", (req, res) => {
    const recipeIndex = req.params.index

    res.render("recipe", { recipes: recipes[recipeIndex] })
})

routes.get('/admin', (req, res) => {
    res.render('admin/index', { recipes })
})

routes.get('/admin/create', (req, res) => {
    res.render('admin/create')
})

routes.get('/admin/:id', (req, res) => {
    const { id } = req.params
    res.render('admin/show', { recipe: recipes[id] })
})

routes.get('/admin/:id/edit', (req, res) => {
    const { id } = req.params

    const foundRecipe = recipes.find( recipe => recipe.ID == id )
    if (!foundRecipe) return res.send('Receita não encontrada!')

    return res.render('admin/edit', { recipe: foundRecipe })
})


module.exports = routes