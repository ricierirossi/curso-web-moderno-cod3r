// Promise é uma promessa de algo que será executado no futuro e será retornado no futuro
// Promise é uma função, mas p será um objeto


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

  