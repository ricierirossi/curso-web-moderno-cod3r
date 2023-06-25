/*
    Atribuição por referência:
        Neste tipo de atribuição é passado endereço da memória para as variáveis/constantes.
        Por exemplo:
            Declarando a const a e atribuindo um objeto a ela
                const a = {nome: Gato}  
            Declarando uma const b e atribuindo o valor de a a ela
                const b = a
            Alterando o valor Gato para Cachorro através da const b 
                b.nome = Cachorro
            Imprimindo a, veremos que o valor dela não será {nome: Gato} mas sim {nome: Cachorro}
            Isso ocorre, pois, a atribuição de objetos em JS para uma variável/constante é feita por referência. 
            Isto é, não se passa o valor em si, mas o endereço da memória desse valor.
            Então, o quê ocorre é que:
                const a recebeu o endereço da memória onde foi armazenado {nome: Gato}
                const b recebeu o mesmo endereço da memória a partir da const a
                Através da const b, foi acessado o endereço da memória e alterado o valor de {nome: Gato} para {nome: Cachorro}
                Acessando o objeto pela const a, iremos até o endereço da memória e teremos {nome: Cachorro}
            Tudo isso pois objetos, funções e outros fazem atribuição por REFERÊNCIA.

    Atribuição por valor:
        Neste tipo de atribuição é passado o valor para as variáveis/constantes.
        Por exemplo:
            Declarando a variável c e atribuindo um número a ela
                c = 3
            Declarando a variável d e atribuindo o valor de c a ela
                d = c
            Ao incrementarmos d com d++ o novo valor de d será 4, porém, o valor de c continuará 3.
            Isso ocorre pois tipos primitivos da linguagem (exemplos: números) utilizar a atribuição por VALOR.   
*/

let valor // Não vou atribuir nada, não inicializada
console.log(valor) // Retorna undefined pois não foi atribuido um valor nem inicializado
//console.log(valor2) // Rertonar um erro "is not defined" que é diferente de "undefined". Aqui nem foi declarado

valor = null // null indica que a var/const não possui nenhum valor nem endereço de memória (ausência de valor). Vazia, inicializada
/*
    null é útil para quando se tem uma var/const apontando para um endereço de memória e não se quer mais que essa var/const
    aponte para algum endereço. Então se atribui o valor null para ela. Não usar undefined.
*/
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // Neste caso, produto está definido (é objeto vazio), mas preco não está definido (undefined)
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(produto.preco)

produto.preco = undefined // Apenas para teste, evite atribuir undefined
console.log(produto)
console.log(produto.preco)
console.log(!!produto.preco)

produto.preco = null // sem preço
console.log(produto)
console.log(produto.preco)
console.log(!!produto.preco)
