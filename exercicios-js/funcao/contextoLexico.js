const valor = 'Global'

// Declando uma função dentro do módulo do node, diretamente dentro do arquivo contextoLexico.js
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/*  
    As funções tem consciência de onde foram declaradas (seu context lexico). Por isso, quando chamamos
    minhaFuncao que foi declarada no contexto lexico global, ela vai buscar a const valor também
    no contexto global.
*/
