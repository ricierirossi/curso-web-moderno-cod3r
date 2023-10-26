const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario");
require("./api/produto")(app, "com param");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(saudacao("Ricieri"));

app.use("/opa", (req, res, next) => {
    console.log("Antes");
    next();
});

app.get("/clientes/relatorio", (req, res) => {
    res.send(
        `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
    );
});

app.post("/corpo", (req, res) => {
    // let corpo = "";
    // req.on("data", function (parte) {
    //     corpo += parte;
    // });

    // req.on("end", function () {
    //     res.send(corpo);
    // });
    res.send(req.body); // usado com o bodyParser
});

app.get("/clientes/:id", (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get("/opa", (req, res, next) => {
    console.log("Durante");
    res.json([
        { id: 7, nome: "Ana" },
        { id: 2, nome: "Bia" },
    ]);
    next();

    // res.json({
    //     nome: "ipad",
    //     preco: 1235,
    // });

    // res.send("Estou bem");
});

app.use("/opa", (req, res) => {
    console.log("Depois");
});

app.listen(3000, () => {
    console.log("Backend executando na porta 3000");
});
