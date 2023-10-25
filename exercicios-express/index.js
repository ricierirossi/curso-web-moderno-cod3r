const express = require("express");
const app = express();
const saudacao = require("./saudacaoMid");

app.use(saudacao("Guilherme"));

app.use("/opa", (req, res, next) => {
    console.log("Antes");
    next();
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

app.listen(3001, () => {
    console.log("Backend executando na porta 3001");
});
