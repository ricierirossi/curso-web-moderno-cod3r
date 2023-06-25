console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

aprovados.sort() // Alguns métodos não alteram o array original, mas o método sort() altera
console.log(aprovados)

delete aprovados[1] // Não reodena o array, o índice 1 fica undefined
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
/*  splice() serve para remover e/ou adicionar elementos:
    splice(a, b, c) ->  a: índice de referência dentro do array
                        b: quantidade de elementos a serem excluídos/substituídos (deixe 0 para não excluir nenhum)
                        c: valores q serão inseridos
*/
aprovados.splice(1, 1)
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)