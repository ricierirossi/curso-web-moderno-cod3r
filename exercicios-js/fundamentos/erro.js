// Criando um código com erro

/*

function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!') // name em inglês
}

const obj = {nome: 'Roberto'} // nome em português para gerar o erro 

imprimirNomeGritado(obj) 

*/

// Corrigindo o erro

function tratarErroELancar(erro) {
    throw new Error('Ocorreu um erro')
    /*
        throw te permite lançar outras coisas como:
        throw 10
        throw false
        throw 'mensagem'
        throw {nome: erro.name, msg: erro.messge}

    */
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') // name em inglês
    } catch (e) { // e é o erro que ocorre no try e é passado diretamente para o catch
        tratarErroELancar(e)
    } finally {
        console.log('final') // Com ou sem erro, o finally é chamado
    }
}

const obj = {nome: 'Roberto'} // nome em português para gerar o erro 

imprimirNomeGritado(obj) 
