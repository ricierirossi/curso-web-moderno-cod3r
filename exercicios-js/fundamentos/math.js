const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)

/* 
    Com o ES7 é possível fazer a operação de exponenciação de forma mais simples e direta utilizando o operador **
*/
let valor = 2 ** 3 // 2 é a base e 3 é o expoente
console.log('2^(3) = ', valor)

/*
    Além disso, também é possível realizar a atribuição exponencial **=
*/
let base = 3
base **= 2 // Eleva o valor armazenado na base à potência 2, é o mesmo que base = base ** 2
console.log('3^(2) = ', base)

/*
    Também é possível trabalhar com expoentes negativos
*/
let numero = 2 ** -2
console.log('2^(-2) = ', numero)
numero **= -2
console.log('0.25^(-2) = ', numero)