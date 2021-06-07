const express = require("express")
const server = express()

// Configurar o template engine do javascript (#nunjucks)


// Configurar pasta publica 
server.use(express.static("public"))


// Utilizando o template engine nunjucks 
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos da minha aplicação 
// página inicial
// req => requisão 
// res => resposta  
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-result.html")
})

// Ligar o servidor 
server.listen(3000)