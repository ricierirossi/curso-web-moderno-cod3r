const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
 
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // Retorna arrays com os pares chave-valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // Se será mostrado ou não na lista de chaves
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2000'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // O primeiro objeto recebe os atributos dos outros objetos

console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)