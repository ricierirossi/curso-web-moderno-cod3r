// Set é estrutura de conjunto não indexada (contrário de arrays e objects), e que não aceita repetição.
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // Não vai adicionar pois não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // Sensitive case
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nome = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nome)
console.log(nomesSet)
