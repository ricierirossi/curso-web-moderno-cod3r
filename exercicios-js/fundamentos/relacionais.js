// Operadores Relacionais sempre retornar true ou false

// Igual a (se preocupa com o valor e não com o tipo)
console.log('01)', '1' == 1) 

// Estritamente igual a (se preocupa com valor e com o tipo)
console.log('02)', '1' === 1) 

// Diferente
console.log('03)', '3' != 3) 

// Estritamente diferente a (se preocupa com valor e com o tipo)
console.log('04)', '3' !== 3) 

// Menor que, maior que, menor igual que, maior igual que
console.log('05)', 3 < 2) 
console.log('06)', 3 > 2) 
console.log('07)', 3 <= 2) 
console.log('08)', 3 >= 2) 

//
const d1 = new Date(0) // 0 representa a data de referência do JS --> 01/01/1970
const d2 = new Date(0)

/* d1 e d2 são variáveis em posições de memória diferente. E pelo fato delas receberem um object, 
suas atribuições são dadas por referência (endereço de memória), e não por valor. Logo, como os endereços
são diferentes, o resultado da comparação será false */
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
/* Neste caso, o retorno será true pois d1.getTime() é um number (tipo primitivo) */
console.log('11)', d1.getTime() === d2.getTime())
console.log(typeof d1.getTime())

console.log('12)', undefined == null) // Como ambos não armazenam nada, retorna true
console.log('13)', undefined === null) // São tipos diferentes, retorna false
console.log(typeof undefined, typeof null)
