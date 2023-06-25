// Curso Web Moderno - Exercícios Fundamentos de Programação

// 01
const cumprimentar = text => console.log(`Olá, ${text}!`)

cumprimentar('Matheus')

// 02
function anosDias (anos) {
    anos * 365
    return anos * 365
}

console.log(anosDias(25))

// 03
const calcularSalario = (horas, valor) => `Salário igual a R$ ${horas * valor}`

console.log(calcularSalario(150, 40.5))

// 04 - Outra forma de resolver seria criar um array com os meses e imprimir apenas um mês com base no número do índice
function retornaMes (mes) {
    switch (mes) {
        case 1:
            return 'Janeiro'
            break
        case 2:
            return 'Fevereiro'
            break
        case 3:
            return 'Março'
            break
        case 4:
            return 'Abril'
            break
        case 5:
            return 'Maio'
            break
        case 6:
            return 'Junho'
            break
        case 7:
            return 'Julho'
            break
        case 8:
            return 'Agosto'
            break
        case 9:
            return 'Setembro'
            break
        case 10:
            return 'Outubro'
            break
        case 11:
            return 'Novembro'
            break
        case 12:
            return 'Dezembro'
            break
        default:
            return 'Mês inválido'

    }
}

console.log(retornaMes(70))

// 05 
const maiorMenor = (a, b) => a > b ? true : false

console.log(maiorMenor(0, 0))
console.log(maiorMenor(0, 3))
console.log(maiorMenor(3, 0))

// 06
function inverso (a) {
    let tipo = typeof a
    if(tipo == "boolean") {
        return !a
    } else if(tipo == 'number') {
        return a * (-1)
    } else {
        return `boolean ou number esperados, mas o parâmetro é do tipo ${typeof tipo}`
    }
}
console.log(inverso(true))
console.log(inverso(3))
console.log(inverso('texto'))

// 07
function estaEntre (numero, min, max, inclusivo = false) {
   if(inclusivo) {
    return numero >= min && numero <= max
   } else {
    return numero > min && numero < max
   }
}

console.log(estaEntre(60, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))

// 08
function multiplicar (a, b) {
    if(a == 0 || b == 0){
        return 0
    }
    soma = a
    for(let cont = 1; cont < b; cont++) {
        soma += a
    }
    return soma

}

console.log(multiplicar(3, 5))
console.log(multiplicar(0, 5))

// 09
function repetir (valor, vezes) {
    const array = []
    for(let i = 0; i < vezes; i++) {
        array.push(valor)
    }
    return array
}

console.log(repetir(3, 4))
console.log(repetir('maçã', 3))

// 10
function simboloMais (quantidade) {
    let mais = ''
    for(let i = 1; i <= quantidade; i++) {
       mais = mais.concat('+')
    }
    return mais
}

console.log(simboloMais(3))
console.log(simboloMais(4))

// 11
function primeiroUltimo (vetor) {
    const resultado = [vetor.shift(), vetor.pop()]
    return resultado
}

console.log(primeiroUltimo(['a', 'b', 'c', 'd']))

// 12
function removeAtrib (objeto, atributo) {
    // Usar um objeto vazio como objeto de destino garante que o método Object.assign crie uma nova instância de objeto na memória
    const copia = Object.assign({}, objeto) 
    delete copia[atributo]
    console.log(copia)
    console.log(objeto)
    console.log(objeto === copia)
}

removeAtrib({a: 1, b: 2, c:3, d: 4}, 'c')

// 13 
function apenasNumero (vetor) {
    let vetorNumero = []
    for(let i = 0; i < vetor.length; i++){
        if(typeof vetor[i] == 'number') {
            vetorNumero.push(vetor[i])
        }
    }
    return vetorNumero
}

console.log(apenasNumero(['a', 5, 7, 'b', 'abc', 50, '5']))

// 14
function objetoParaArray (objeto) {
    let vetor = Object.entries(objeto)
    console.log(vetor)
}

objetoParaArray({nome: 'Ana', idade: 23, altura: '1.72 m'})

// 15
const vetor1 = [10, 70, 20, 43]
const vetor2 = [1, 2, 3, 4, 5]

function retornaPares(elemento, indice) {
    if(elemento % 2 == 0 && indice % 2 == 0)
    return elemento
}

console.log(vetor1.filter(retornaPares))
console.log(vetor2.filter(retornaPares))

// 16
function bissexto (ano) {
    const div4 = ano % 4 == 0
    const div100 = ano % 100 == 0
    const div400 = ano % 400 == 0
    if ((div4 && div100 && div400) || (div4 && !div100)) {
        return `${ano} é bissexto`
    } else {
        return `${ano} NÃO é bissexto`
    }
}

console.log(bissexto(2020))
console.log(bissexto(2100))

// 17
const array = [10, 100, 20]

console.log(array.reduce((inicial, proximo) => inicial + proximo))

// 18
const despesas = [
    {nome: 'Jonal Online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entretenimento', preco: 150},
    {nome: 'Pet Shop', categoria: 'Saúde', preco: 80}
]

console.log(despesas.reduce(function (inicial, proximo) {
    return inicial + proximo.preco
}, 0)) // É preciso o 0, senão a variável inicial começa com um objeto e não com um valor 0

// 19
function media (array) {
    const media = array.reduce(function (acumulado, proximo) {
        return acumulado + proximo
    }, 0)
    return media / array.length
}

console.log(media([10, 20, 30]))

// 20
const areaTri = (b, a) => ((b * a) / 2).toFixed(2)

console.log(areaTri(10, 15))
console.log(areaTri(7, 9))
console.log(areaTri(9.25, 13.1))

// 21
const menor = array => Math.min.apply(null, array)
console.log(menor([10, -1, 2, 5]))

// 22
function sorteio (n, min = 1, max = 10) {
    let sorteado = Math.ceil(Math.random() * ((max - min + 1) + min))
    return sorteado == n ? `Parabéns. O número sorteado foi ${sorteado}` : `Que pena. O número sorteado foi ${sorteado}`
}

console.log(sorteio(5))

// 23
function contaChar (char, string) {
    let stringSeparada = string.split("").filter(e => e == char).length
    console.log(stringSeparada)
}

contaChar('r', 'A sorte favorece os audazes.')

// 24
function pesquisar (pesquisa, palavras) {
    let resultado = palavras.filter(function (elemento) {
        return elemento.includes(pesquisa)
    })
    return resultado
}

console.log(pesquisar('pro', ['programação', 'mobile', 'profissional', 'produto']))

// 25
function removerVogais (texto) {
    const vogal = ['a', 'e', 'i', 'o', 'u']
    const removido = texto.split("").filter(function (e) {
        return !vogal.includes(e)
    }).join('')
    return removido
}

console.log(removerVogais('Amarelo'))

// 26
const objeto = {nome: 'Jornal Online', categoria: 'Informação', preco: 89.99}

// function inverteObjeto (obj) {
//     const chave = Object.keys(obj)
//     const valor = Object.values(obj)
//     const arrayObjeto = []
//     for(let i = 0; i < chave.length; i++) {
//         let e = [valor[i], chave[i]]
//         arrayObjeto.push(e)
//     }
//     const novoObjeto = Object.fromEntries(arrayObjeto)
//     console.log(novoObjeto)
// }

function inverteObjeto (obj) {
    const objInv = {}
    Object.entries(obj).forEach( parChaveValor => {
        const chave = 0, valor = 1
        objInv[parChaveValor[valor]] = parChaveValor[chave]
    })
    console.log(objInv)
}

inverteObjeto(objeto)

// 27
function filtraDigitos (arr, dig ) {
    const filtrado = arr.filter(elem => String(elem).length == dig)
    return filtrado
}

console.log(filtraDigitos([3, 4, 12, 87, 456, 369, 558], 3))

// 28 
function segundoMaior (numeros) {
    let ordenado = numeros.sort((a, b) => b - a)
    return ordenado[1]
}

console.log(segundoMaior([1, 9, 0, 7, 2]))

// 29
const alunosNotas = {Ana: [8, 7.6, 8.9, 6], Julio: [5, 6.6, 7.9, 8], Carla: [7, 7, 8, 9]}

