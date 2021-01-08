const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()
const port = 5000

server.use(express.static("public"))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", { 
    express: server,
    noCache: true,
    autoescape: false
})

server.listen(port, () => {
    console.log(`O servidor está ligado e pode ser acessado em http://localhost:${port}`)
    console.log('Para desligar o servidor, tecle "ctrl + c" aqui no terminal')
})