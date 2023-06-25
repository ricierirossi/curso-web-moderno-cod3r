/*
    For In percorre todos os atributos/indices de um objeto/array automaticamente
*/

const notas = [6.7, 7, 8.5, 0, 3.8]

for (let i in notas) { // i é o parâmetro que recebe o índice do array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64,
}

for (let atrib in pessoa) { // atrib é o parâmetro que recebe o atributo do objeto
    console.log(`${atrib} = ${pessoa[atrib]}`)
}