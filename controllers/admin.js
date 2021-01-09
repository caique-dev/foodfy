const recipes = require('../data')
const data = require('../data.json')
const fs = require('fs')

exports.index = (req, res) => {
    res.render('admin/index', { recipes: data.recipes })
}

exports.show = (req, res) => {
    const { id } = req.params
    
    const foundRecipe = data.recipes.find( recipe => recipe.id == id)

    res.render('admin/show', { recipe: foundRecipe })
}

exports.create = (req, res) => {
    res.render('admin/create', { create: true })
}

exports.post = (req, res) => {
    console.log('cheguei')
    const keys = Object.keys(req.body)
    
    for (const key of keys) {
        if (key != 'aditional_information' && req.body[key] == '') return res.send('Preencha todos os campos!!')
        if (key == 'Ingredients' || key == 'steps') console.log( 'ok ')
    }

    let id = 1
    const lastRecipe = data.recipes[data.recipes.length - 1]

    if (lastRecipe) id = lastRecipe.id + 1

    const newRecipe = {
        id,
        ...req.body
    }

    data.recipes.push(newRecipe)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (error) => {
        if (error) return res.send('Problema na gravação do arquivo!') 
    })

    return res.redirect(`/admin/${ id }`)
}

exports.edit = (req, res) => {
    const { id } = req.params

    const foundRecipe = data.recipes.find( recipe => recipe.id == id )
    if (!foundRecipe) return res.send('Receita não encontrada!')

    return res.render('admin/edit', { recipe: foundRecipe })
}

exports.put = (req, res) => {
    const { id } = req.body
    let index

    const foundRecipe = data.recipes.find( (recipe, recipeIndex) => {
        if (recipe.id == id) {
            index = recipeIndex
            return true
        }
    })

    if (!foundRecipe) return res.send('Receita não encontrada!')

    const recipeEdited = {
        ...foundRecipe,
        ...req.body,
        preparation: req.body.steps
    }

    data.recipes[index] = recipeEdited

    fs.writeFile('data.json', JSON.stringify(data, null, 2), error => {if (error) res.send("Erro na gravação do arquivo!")})

    return res.redirect(`/admin/${ id }`)
}

exports.delete = (req, res) => {
    const { id } = req.body

    const recipesFiltered = data.recipes.filter( recipe => {
        if (recipe.id != id) return true
    })

    data.recipes = recipesFiltered

    fs.writeFile('data.json', JSON.stringify(data, null, 2), error => {if (error) res.send('Erro na gravação do arquivo')})

    return res.redirect('/admin')
}