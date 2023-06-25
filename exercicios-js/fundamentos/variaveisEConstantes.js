// Variáveis var e let
var a = 3
let b = 4

var a = 30 // Variáveis do tipo var podem ser redeclaradas.
// let b = 40 // Gera erro, pois, usando let não é possível redeclarar a variável.
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

// Constantes const
const c = 5
// c = 50 // Gera erro, pois, não é possível atribuir um valor diferente ao já atribuído a uma constante.
// const c = 500 // Não é possível redeclarar constantes também.
console.log(c)