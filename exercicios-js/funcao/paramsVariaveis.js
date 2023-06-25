function soma() {
    let soma = 0
    /*  arguments é uma palavra reservada para um array de uma função 
        com todos os parâmetros que foram passados a ela.
    */
    for (i in arguments) { 
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))