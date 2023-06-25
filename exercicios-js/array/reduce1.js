// Reduce é usado para transformar um array em outra coisa. Consiste em dar um valor inicial para o parâmetro acumulador (no caso foi 10);
// e Reduce irá pegar o acumulador e somar com o próximo elemento (atual), atribuir esta soma ao acumulador e somar com o atual, atribuir novamente a soma
// ao acumulador e assim por diante.
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'JAna', nota: 8.7, bolsista: true},
]



const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // Remover o ", 10" para deixar sem valor inicial

