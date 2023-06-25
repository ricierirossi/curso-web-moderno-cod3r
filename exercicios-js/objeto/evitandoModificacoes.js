// Object.preventExtensions -> impede que sejam adicionados atributos em um objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal -> impede que sejam criados/excluídos atributos em um objeto
const pessoa = {nome: 'Juliana', idade: 25}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 39
console.log(pessoa)

// Object.freeze -> impede que sejam criados/excluídos/modificados atributos em um objeto