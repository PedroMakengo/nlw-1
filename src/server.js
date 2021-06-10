const express = require("express")
const server = express()


// Pegando o banco de dados 
const db = require("./database/db")

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
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }
        const total = rows.length
        // Mostrar html com os dados do banco de dados
        return res.render("search-result.html", {places: rows, total})
    })
})

// Ligar o servidor 
server.listen(3000)