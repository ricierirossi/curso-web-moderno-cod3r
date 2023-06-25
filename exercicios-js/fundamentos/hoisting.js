console.log('a = ', a)
var a = 2
console.log('a = ', a)

/*  Hoisting é o içamento. Isto é, a variável var é "jogada para cima".
    Por exemplo, no código acima, a variável a só é atribuída na linha 2, mas devido ao içamento
    é como se ela fosse declarada antes da linha 1, gerando um resultado undefined (ela existe mas
    não tem valor). Também ocorre com variáveis var dentro de funções.
    É como se o código fosse o seguinte:
        var a
        console.log('a = ', a)
        a = 2
        console.log('a = ', a)
*/

// Mas o hoisting não ocorre com variável let

console.log('b = ', b)
let b = 3
console.log('b = ', b)