// String é uma cadeia de caracteres delimitada por '' ou "" ou `` (template string)

const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o caracter no index 4 (iniciando em 0)
console.log(escola.charAt(5)) // Não existe index 5 em escola, então retorna nada
console.log(escola.charCodeAt(3)) // Retorna o valor na tabela UniCode referente ao caracter no index 3
console.log(escola.indexOf('o')) // Retorna o index do primeiro caracter 'o'
console.log(escola.substring(1)) // Retorna a string a partir do index 1
console.log(escola.substring(0, 3)) // Retorna a string entre 0 (incluso) e 3 (não incluso) 
console.log('Escola '.concat(escola).concat('!')) // Concatena
console.log('Escola '+ escola + '!') // Concatena com '+'
console.log(escola.replace(3, 'e')) // Troca um (o primeiro encontrado) ou mais (sequência) caracteres por 
                                    // outro(s) - caracter número não requer aspas
console.log(escola) // A constante mesmo não se altera
console.log('Ana,Maria,Pedro') // String
console.log('Ana,Maria,Pedro'.split(',')) // Convertendo a String para um Array



