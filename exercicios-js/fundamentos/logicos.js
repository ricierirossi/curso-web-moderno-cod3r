/* 
    Tabela Verdade XOR (precisa ser diferente para ser true)
    f xor f -> false
    f xor t -> true
    t xor f -> true
    t xor t -> false
*/

function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2 //Or
    const comprarTv50 = trab1 && trab2 //And
    const comprarTv32 = !!(trab1 ^ trab2) // Bitwise XOr (retorna 1 se apenas um dos dois bits for 1, 0 se nenhum ou ambos for 1)
    // XOr pode ser feito também utilizando a diferença (vide tabela verdade acima)
    // const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete

    //Criando um objeto diretamente com o nome da constante é possível omitir o nome do valor na criação
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))