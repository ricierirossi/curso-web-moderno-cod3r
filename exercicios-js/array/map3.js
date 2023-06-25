// Implementando map
Array.prototype.map2 = function (callback) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retorne um array apenas com os preços
const paraObjeto = json => JSON.parse(json) // Converte o JSON para Objeto
const apenasPreco = produto => produto.preco // Como agora é um objeto, basta chama o atributo preco de cada par chave-valor

const resultado = carrinho.map2(paraObjeto)
console.log(resultado)
