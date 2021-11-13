const express = require("express")
const app = express()
const PORTA = 3000

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/helloRodrigo", (req, res) => {
    res.send("Hello Rodrigo!!!")
})

app.get("/api/produtos", (req, res) => {
    res.send("Listando produtos")

})

app.get("/api/produtos/:id", (req, res) => {
    res.send("Listando produto com id "+req.params.id)
})

app.post("/api/produtos", (req, res) => {
    const produto = req.body
    res.send("Adicionando novo produto: "+produto.nome)
    
})

app.put("/api/produtos/:id", (req, res) => {
    const id = req.params.id
    const produto = req.body
    res.send("Alterando o produto "+id)

})

app.delete("/api/produtos/:id", (req, res) => {
    const id = req.params.id
    res.send("Deletando produto com id: "+id)
})

app.listen(PORTA, () => {
    console.log("Iniciando na porta "+PORTA)

})
