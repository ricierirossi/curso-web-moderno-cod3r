function inteiroAleat(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1   

// Do While: executa um código e depois entra na repetição While. 
// Também não é necessário que a variável opcao tenha um valor atribuido inicialmente.

do {
    opcao = inteiroAleat(-1, 10)
    console.log(opcao)
} while (opcao != -1)

console.log('Fim')