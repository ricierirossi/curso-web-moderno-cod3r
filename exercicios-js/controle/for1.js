// Usando While com número determinado de repetições
let contador = 1
while (contador <= 10) {
    console.log(`Contador: ${contador}`)
    contador++
}

//Transformando o While em um For
for (let i = 1; i <= 10; i++ ) {
    console.log(`i: ${i}`)
}

const notas = [6.7, 7, 8.5, 0, 3.8]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}