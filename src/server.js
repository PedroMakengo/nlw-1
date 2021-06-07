const express = require("express")
const server = express()

// Configurar caminhos da minha aplicação 
// página inicial
// req => requisão 
// res => resposta  
server.get("/", (req, res) => {
    res.send("Cheguei aqui")
})

// Ligar o servidor 
server.listen(3000)