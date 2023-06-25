// Implementando filter
Array.prototype.filter2 = function (callback) {
    let a
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            a = novoArray.push(this[i])
        }
    }
    return a
}

const prod = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},  
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = prod => prod.preco >= 500
const fragil = prod => prod.fragil

console.log(prod.filter2(caro).filter2(fragil))