// Filter é usado para retornar um novo array com elementos filtrados de um array original

const prod = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},  
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(prod.filter(function (p) {
    // O return deve conter uma condição ou um filtro. Para return false, o retorno é um array vazio e todos os elementos em caso true
    return false 
}))

// console.log(prod.filter(function (p) {
//     // O return deve conter uma condição ou um filtro. Para return false, o retorno é um array vazio e todos os elementos em caso true
//     return p.preco > 500 && p.fragil == true
// }))

const caro = prod => prod.preco >= 500
const fragil = prod => prod.fragil

console.log(prod.filter(caro).filter(fragil))