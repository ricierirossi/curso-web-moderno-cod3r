const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios
    .get(url)
    .then((response) => {
        const funcionarios = response.data;
        const funcionariasChinesas = funcionarios.filter((funcionaria) => {
            return funcionaria.pais == "China" && funcionaria.genero == "F";
        });
        return funcionariasChinesas;
    })
    .then((funcionariasChinesas) => {
        const menorSalario = funcionariasChinesas.reduce(
            (funcionariaAcc, funcionariaCur) => {
                return funcionariaCur.salario < funcionariaAcc.salario
                    ? funcionariaCur
                    : funcionariaAcc;
            },
            funcionariasChinesas[0]
        );
        console.log(menorSalario);
    });

// Outra maneira de resolver
/*
const url2 = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chineses = (funcionarios) => funcionarios.pais === "China";
const chinesas = (funcionarios) => funcionarios.genero === "F";
const menorSalario = (func, funcAtual) =>
    func.salario < funcAtual.salario ? func : funcAtual;

axios.get(url2).then((response) => {
    const funcionarios = response.data;

    const funcChinesaSalario = funcionarios
        .filter(chineses)
        .filter(chinesas)
        .reduce(menorSalario);
    console.log(funcChinesaSalario);
});
*/
