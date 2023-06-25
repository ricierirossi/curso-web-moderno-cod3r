// Map se diferencia do objeto pela chave poder ser uma função, número, objeto, etc enquanto no objeto é um literal

// Forma 1 de definir um Map
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // Não funciona, pois não é objeto
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

// Forma 2 de definir um Map
const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})


console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a') // Cria a chave 123 com valor a
chavesVariadas.set(123, 'b') // Substitui o valor a por b, pois não permite duas chaves com mesmo nome
chavesVariadas.set(456, 'b') // Mas permite repetir os valores
console.log(chavesVariadas)