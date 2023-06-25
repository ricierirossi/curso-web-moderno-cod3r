// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    // Se a, b ou c for 0 então vai retornar o valor padrão 1
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
// Como 0 é lido como false, então o parâmetro vai ter como valor (1, 1, 1) retornando o valor 3

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    // Verifica se o parâmetro é estritamente diferente de undefined, se for retorna a, senão retorna 1
    a = a !== undefined ? a : 1
    // Verifica se o índice 1 de arguments existe, senão retorna 1 (precisa mudar o índice dependendo da posição do parâmetro)
    b = 1 in arguments ? b : 1
    // verifica se o parâmetro é um NaN, se for retorna 1 senão retorna o valor do parâmetro (Essa opçao é mais segura)
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))