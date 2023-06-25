function gerarNumerosEntre (min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }  
    return new Promise ((resolve, reject) => {        
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            if(numerosProibidos.includes(aleatorio)) {
                reject('Número repetido')
            }else {
                resolve(aleatorio)
            }
    })
}

async function gerarMegaSena (qtdNumeros) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) { // Array(qtdNumeros).fill() cria um Array com a quantidade de elementos definidas
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        throw 'Que chato :('
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)