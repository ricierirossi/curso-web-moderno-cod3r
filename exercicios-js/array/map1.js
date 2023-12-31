// Map serve para mapear os elementos de um array para outro gerando um novo array.

const nums = [1, 2, 3, 4, 5]

// Map é um For com propósito
let resultado = nums.map(function (e) {
    return e * 2 // Obrigatoriamente deve retornar algo
})

console.log(nums)
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)