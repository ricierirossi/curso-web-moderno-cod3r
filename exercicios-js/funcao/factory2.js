// Minha versão

function criarProd(x, y) {
    return {
        nome: x,
        preco: y,
        desconto: 0.1
    }
}

console.log(criarProd('celular', 1234))
console.log(criarProd('tv', 1200))

// Versão da aula

function criarProd2(nome, preco) {
    return {
        nome, // Como o parâmetro e o atributo vão ter o mesmo nome não é necessário escrever nome: nome
        preco,
        desconto: 0.1
    }
}

console.log(criarProd2('Notebook', 2149.99))
console.log(criarProd2('iPad', 1149.99))