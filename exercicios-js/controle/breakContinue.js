/*
    Break: causa um desvio de fluxo para fora do laço, isto é, o laço todo é interrompido.
    Continue: causa um desvio de fluxo interrompendo a repetição em questão e vai para a próxima mantendo o laço funcionando
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in num) {
    if (x == 5) {
        break // break não age sobre if, mas sim sobre o bloco mais próximo que seja for, while ou switch
    }
    console.log(`${x} = ${num[x]}`)
}

console.log('--------------------------')

for (y in num) {
    if (y == 5) {
        continue // continue não age sobre if, mas sim sobre o bloco mais próximo que seja for ou while
    }
    console.log(`${y} = ${num[y]}`)
}



// Evitar usar esse tipo de estrutura:
externo:  // rótulo
for (a in num) {
    for (b in num) {
        if(a == 2 && b == 3) break externo 
        console.log(`par = ${a}, ${b}`)
        /*
            Neste caso, o break age em cima do for mais externo (a in num) devido ao rótulo, caso não houvesse o rótulo
            o break agiria em cima do for interno (b i num)
        */
    }
}