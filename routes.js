const express = require('express')
const public_acess = require('./controllers/public_acess')
const admin = require('./controllers/admin')

const routes = express.Router()

routes.get("/", (req, res) => res.redirect('/recipes'))
routes.get("/recipes", public_acess.index)
routes.get("/about", public_acess.about)
routes.get("/recipe/:index", public_acess.show)
routes.get('/login', public_acess.login)

routes.get('/admin', admin.index)
routes.get('/admin/create', admin.create)
routes.get('/admin/:id', admin.show)
routes.get('/admin/:id/edit', admin.edit)
routes.post('/admin', admin.post)
routes.put('/admin', admin.put)
routes.delete('/admin', admin.delete)

module.exports = routes