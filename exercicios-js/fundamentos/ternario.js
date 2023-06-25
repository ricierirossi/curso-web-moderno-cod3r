/*  Operador ternário possui 3 operandos
    Operação Relacional ? Expressão se True : Expressão se False
    A grosso modo é um if else
*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(3))