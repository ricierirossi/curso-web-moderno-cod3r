let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // O valor 1 se comporta como verdadeiro e 0 como falso
console.log(typeof isAtivo)
console.log(!!isAtivo) // !! usado para verificar se o valor é true (dupla negação); ou converter para true (!!) ou false (!)

console.log('Os verdadeiros...')
console.log(!!1)
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // Espaço
console.log(!!'texto')
console.log(!![]) // Array
console.log(!!{}) // Objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 5410))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'') // String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Ninguém') // Or pode ser usado de forma que verifica se a expressão é true ou false e realiar a ação

