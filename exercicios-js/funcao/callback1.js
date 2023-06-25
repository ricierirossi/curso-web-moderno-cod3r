/*
    Callback é uma função passada e quando ocorre algum evento esta função é chamada de volta para fazer algo
*/

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

/*  
    Syntax: forEach(callbackFn) 
    callbackFn: A function to execute for each element in the array. Its return value is discarded. 
    forEach retorna automaticamente o valor do elemento no array, o índice do elemento e o próprio array, nesta ordem
*/
fabricantes.forEach(imprimir) 
fabricantes.forEach(function (a) {
    console.log(a)
})