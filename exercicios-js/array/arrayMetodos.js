const pilotos = ['Vettal', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na última posição
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição
console.log(pilotos)

// Splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
pilotos.splice(3, 1)
console.log(pilotos)

// Slice
const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array a partir do indíce x
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Retorna um array baseado no intervalo 1 (incluso) a 4 (não incluso)
console.log(algunsPilotos2)
