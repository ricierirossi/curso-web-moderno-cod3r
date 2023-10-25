const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDedados = require("./bancoDeDados");

// Com o Express, next() é identificada automaticamente como sendo a próxima função (conforme disposição
// do código que atende a mesma URL e o mesmo método HTTP)
/*app.get("/produtos", (req, res, next) => {
    console.log("Middleware 1...");
    next(); 
});
*/
/*
app.get("/produtos", (req, res, next) => {
    console.log("Middleware 2...");
    res.send({ nome: "notebook", preco: 1234 }); // Converte o objeto para JSON automaticamente
});
*/

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
    res.send(bancoDedados.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDedados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto); // Converte o objeto em JSON
});

app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDedados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    });
    res.send(produto); // Converte o objeto em JSON
});

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDedados.excluirProduto(req.params.id);
    res.send(produto); // Converte o objeto em JSON 
});

app.listen(porta, () => {
    console.log("Servidor executando na porta " + porta);
});
