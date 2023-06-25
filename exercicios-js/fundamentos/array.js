const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores[4])

// valores[10] = 5
// console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // Adiciona novos elementos ao final do array. Podem ser outros tipos de dados
console.log(valores)

console.log(valores.pop()) // Remove o último elemento de um array
console.log(valores)

delete valores[0] // Remove o elemento na posição 0 do array mas mantem a existência de um elemento vazio nessa posição
console.log(valores)
console.log(typeof valores)