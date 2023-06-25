let num1 = 1
let num2 = 2
// Operadores unários da forma pre-fixada tem prioridade em cima dos operadores da forma pos-fixada
// Pre-fixada
num1++
console.log(num1)
//Pós-fixada
--num1
console.log(num1)

console.log(++num1 === num2--) // num2 é decrementado apenas depois da operação de comparação
console.log(num1)
console.log(num2)