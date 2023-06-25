// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Neste caso o parâmetro b é undefined pois não foi passado, resultando em NaN
imprimirSoma()
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // Ignora parâmetros a mais

// Função com retorno
function soma (a, b = 1) { // b = 0 é um valor padrão para caso não seja passado outro valor para b
    return a + b
}
soma(2, 7) // Não mostra o valor pois a função não possui um consol.log em seu corpo
console.log(soma(2, 7))
console.log(soma(2))
console.log(soma())
