/* 
    Tipagem fraca: as variáveis não ficam presas a um único tipo de dado.
    Exemplo: a variável let pode ser inicialmente uma string e depois ter 
    seu valor alterado para um number.
*/

let qualquer = 'Legal' // Pode ser aspas duplas ou aspas simples
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1415
console.log(qualquer)
console.log(typeof qualquer)

// Evite escolher nomes genéricos e siglas, exemplo:
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkkk 