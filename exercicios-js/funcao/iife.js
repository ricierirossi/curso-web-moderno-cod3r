// Em funções auto invocadas, tudo criado dentro da função será escopo local da função
// IIFE --> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()