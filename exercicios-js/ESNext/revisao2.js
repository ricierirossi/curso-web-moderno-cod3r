// Arrow Function (sempre anônimas)
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro default
function log (texto = 'Node') {
    console.log(texto)
}
log()

// Operador rest (quando em funções é chamado de rest e agrupa os parâmetros em array; quando em objetos/arrays é chamado de spread e separa os dados)
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))