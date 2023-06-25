const filhas = ['Ana', 'Luiza']
const filhos = ['Luan', 'Marcos']
const todos = filhas.concat(filhos)
const todos2 = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos, todos2)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))