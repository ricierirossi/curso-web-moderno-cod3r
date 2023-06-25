// Armazenando uma função em uma var/const

const imprimirSoma = function (a, b) { // Função anônima -> sem nome
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função Arrow em uma var/const
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 7))

// Retorno implícito 
const subtracao = (a, b) => a - b /* Aqui o return está implícito, pois, tem-se apenas uma sentença de código.
                                    é possível remover os parenteses */
console.log(subtracao(2, 3))
