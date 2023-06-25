const notas = [7, 9, 2.4, 8, 0, 1, 2, 7, 10]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Usando callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 // filter retona true ou false com base na função callback, se for true o valor é passado para o array notasBaixas2
})

console.log(notasBaixas2)

// Usando callback com arrow function
const notasBaixas3 = notas.filter(nota => nota < 7 )

console.log(notasBaixas3)