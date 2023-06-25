console.log(7 / 0)
console.log('10' / 2) // Java verifica se a string pode ser convertida para um number para realizar a operação
console.log('3' + 2) // Neste caso a string tem preferência, então concatena ao invés de somar, pois '+' faz sentido com strings
console.log('3' - 2) // Neste caso não faz sentido o '-' com strings, então é subtraído, o mesmo para o '/'
console.log('Show!' * 2)
/*
    Especificação do IEE para operações com ponto flututante: pode não retornar o valor com precisão exatada para não ficar 
    tão lenta a operação - deve-se tomar cuidado com isso!!!
*/
console.log(0.1 + 0.7) 
// console.log(10.toString()) // Não dá para chamar diretamente o literal.função (literal é o valor direto)
// Mas pode chamcar o (literal).função
console.log((10.345).toFixed(2))

