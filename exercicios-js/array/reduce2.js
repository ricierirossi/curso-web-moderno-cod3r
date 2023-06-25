const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'JAna', nota: 8.7, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?

const saoBolsistas = alunos.map(e => e.bolsista).reduce(function (acumulador, atual) {
    return acumulador && atual
})

console.log(saoBolsistas)

// Desafio 2: Algum aluno é bolsista?

const umBolsista = alunos.map(e => e.bolsista).reduce(function (acumulador, atual) {
    return acumulador || atual
})

console.log(umBolsista)
