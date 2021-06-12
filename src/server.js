const express = require("express")
const server = express()


// Pegando o banco de dados 
const db = require("./database/db")

// Configurar o template engine do javascript (#nunjucks)

// Configurar pasta publica 
server.use(express.static("public"))

// Habilitar o uso de req.body na nossa aplicação 
server.use(express.urlencoded({extended: true}))

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

    // req.query = query string da nossa url
    console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    // req.body: O corpo do nosso formulário
    // console.log(req.body)

    // Inserir dados no banco de dados 
    const query = `
    INSERT INTO places(
        image, 
        name, 
        address, 
        address2, 
        state, 
        city, 
        items
    ) VALUES (?,?,?,?,?,?,?); `

    const values = [
        req.body.image, 
        req.body.name, 
        req.body.address, 
        req.body.address2, 
        req.body.state, 
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err);
            return res.send("Erro no cadastro")
        }
        console.log("Cadastro com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData)
    
})


server.get("/search", (req, res) => {

    let search = req.body.search
    console.log(search)

    if(search == ''){
        // Pesquisa vazia 
        return res.render("search-result.html", {total: 0})
    }

    db.all(`SELECT * FROM places WHERE city = '${search}' `, function(err, rows){
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