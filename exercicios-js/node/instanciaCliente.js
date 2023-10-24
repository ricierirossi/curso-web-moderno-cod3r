const contaA = require("./instanciaUnica");
const contaB = require("./instanciaUnica");

const contaC = require("./instanciaNova")(); // Precisa chamar a função pois contaC retorna uma função
const contaD = require("./instanciaNova")();

// Pelo fato do node criar cache dos módulos, ao incrementar o valor original 1 no contaA para 3, quando
// se chama pelo contaB o valor também será 3, por compartilhar a mesma instância.
contaA.inc();
contaA.inc();
console.log(contaB.valor, contaB.valor);

// O valor do contaD não é alterado, pois, usando a função factory são criadas novas instâncias.
contaC.inc();
contaC.inc();
console.log(contaC.valor, contaD.valor);
