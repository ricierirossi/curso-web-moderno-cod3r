function rand({ min = 0, max = 1000 }) { // Aqui é o operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40})) // Aqui é um object

/*  Poderia ser assim também:
    const objeto = {max: 40, min: 40}
    console.log(rand(obj))
*/
