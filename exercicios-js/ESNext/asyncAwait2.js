function esperarPor (tempo = 2000) {
    return new Promise (function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(v => console.log('Executando promise 1'))
//     .then(esperarPor)
//     .then(v => console.log('Executando promise 2 '))
//     .then(esperarPor)
//     .then(v => console.log('Executando promise 3'))

function retornarValor() {
    return new Promise (resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

// Async/Await faz com que tenha um código que parece síncrono embora seja assíncrono,
// isto é, ao invés de usar then, o código vai ficar parado e só vai para a próxima linha
// quando ele terminar a execução

async function executar() {
    let valor = await retornarValor()
    await esperarPor(2000) // Quando tiver uma função que retorna promise pode-se usá-la junto ao await
    console.log(`asyn/await ${valor}`)
    await esperarPor(2000)
    console.log(`asyn/await ${valor + 1}`)
    await esperarPor(2000)
    console.log(`asyn/await ${valor + 2}`)

    return valor + 3
}

async function executarDeVerdade () {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
