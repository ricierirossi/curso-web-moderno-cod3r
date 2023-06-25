const myPromise = new Promise (resolve => {
    let array = []
    let i 
    setTimeout(() => {
        for (i = 0; i < 5; i++) {
            array.push(i)
        }
        resolve(i)    
    }, 3000)
})

myPromise
    .then(valorUltimo => valorUltimo + 2)
    .then(imprimirSoma => console.log(imprimirSoma))
    .catch(warn => console.log('Ruim'))

  