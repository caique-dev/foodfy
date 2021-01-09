const  recipes = require('../data')

exports.index = (req, res) => {
    res.render('admin/index', { recipes })
}

exports.create = (req, res) => {
    res.render('admin/create')
}

exports.show = (req, res) => {
    const { id } = req.params
    res.render('admin/show', { recipe: recipes[id] })
}

exports.edit = (req, res) => {
    const { id } = req.params

    const foundRecipe = recipes.find( recipe => recipe.ID == id )
    if (!foundRecipe) return res.send('Receita não encontrada!')

    return res.render('admin/edit', { recipe: foundRecipe })
}