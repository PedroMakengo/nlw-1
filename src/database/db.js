// Importar a dependencia do sqlite 3
const sqlite3 = require("sqlite3").verbose() 

// Criar o objeto que irá fazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

// db.serialize(() => {
//     // Criar uma tabela 
//     // db.run(`
//     //         CREATE TABLE IF NOT EXISTS places(
//     //             id INTEGER PRIMARY KEY AUTOINCREMENT, 
//     //             image TEXT,
//     //             name TEXT,
//     //             address TEXT, 
//     //             address2 TEXT, 
//     //             state TEXT, 
//     //             city TEXT, 
//     //             items TEXT
//     //         );
//     //     `)

//     // Inserir 
//     // const query = `
//     // INSERT INTO places(
//     //     image, 
//     //     name, 
//     //     address, 
//     //     address2, 
//     //     state, 
//     //     city, 
//     //     items
//     // ) VALUES (?,?,?,?,?,?,?); `

//     // const values = [
//     //     "./assets/background/1.jpg",
//     //     "Colectoria",
//     //     "Luanda",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Resíduos Electrônicos, Lampadas"
//     // ]

//     // function afterInsertData(err) {
//     //     if(err) {
//     //         return console.log(err);
//     //     }
//     //     console.log("Cadastro com sucesso")
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)

//     // Consultar dados na tabela 
//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão os seus registros")
//     //     console.log(rows)
//     // })

//     // Deletar dados na tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [8], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Eliminado com sucesso")
    // })
// })
