function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // Cria um atributo getPreco e associa a função já criada anteriormente
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Chamando a função diretamente (ela do global por causa do this que está no escopo global)
console.log(produto.getPreco()) // Chamando a função por um objeto

const carro = { preco: 49990, desc: 0.20 }

// Chamando a função através do objeto utilizando método Call e Apply - com parâmetros já definidos
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Chamando a função através do objeto utilizando método Call e Apply - passando os parâmetros juntos
console.log(getPreco.call(carro, 0.17, '$' )) // call(objeto, parâmetro1 da função, parâmetro2 da função)
console.log(getPreco.apply(carro, [0.18, '$$'])) // apply(objeto, [parâmetro1 da função, parâmetro 2 da função])