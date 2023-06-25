// Tagged Template -> processa o template dentro de uma função
function tag (partes, ...valores) {
    console.log(partes) // Vai imprimir um array com o que não foi interpolado
    console.log(valores) // Vai imprimir um array com o que foi interpolado
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)