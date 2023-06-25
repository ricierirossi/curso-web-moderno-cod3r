// pessoa aponta para um endereço de memória, e pares chave-valor estão armazenados neste endereço
// Por isso que pode-se criar um objeto como uma const e se alterar os valores deste objeto sem problemas
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Se tentarmos atribuir um novo objeto a const, haverá erro, pois este objeto está em outro endereço de memória
// pessoa = {nome: 'Ana'}

// Congelando objeto pessoa (não é possível alterar o objeto)
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome
console.log(pessoa)

// Criando um objeto constante
const pessoaConstante = Object.freeze({nome: 'Peter'})
pessoaConstante.nome = 'Mary'
console.log(pessoaConstante)