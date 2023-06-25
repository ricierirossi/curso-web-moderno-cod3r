/* 
    Para esclarecer: 
        Objeto em JavaScript não é o mesmo que JSON.
        JSON (javaScript object notation ) é um formato textual.

        Um par de chaves {} representa um objeto
*/

/*
    Em JS, o objeto é uma coleção de chave e valor. Existe um nome do atributo/identificador e é passado um valor para ele
    que pode ser de qualquer tipos. Objetos podem ter outros objetos dentro deles. 
    Portanto, objeto é um grupo de pares chave-valor.
*/
const prod1 = {}
// No caso abaixo: chave -> nome; valor -> 'Celular Ultra Mega'
prod1.nome = 'Celular Ultra Mega' // nome é criado dinâmicamente dentro do objeto prod1
prod1.preço = 4998.90
prod1['desconto legal'] = 0.40 // Outra forma de se criar um par chave-valor para o objeto (permite espaços mas evitar)

console.log(prod1)

// Outra forma de criar um objeto (pode-se ter objetos dentro de outros objetos)
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}
console.log(prod2)

// Pode-se ter objetos dentro de outros objetos
const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod3)

/*
    Por curiosidade, um json seria:
    '{"nome": "Camisa Polo", "preco": 79.90}'
*/
