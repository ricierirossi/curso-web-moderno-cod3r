function funcionarOuNao (valor, chanceErro) {
    return new Promise ((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro.')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v), // Erro proposital
        err => console.log(`Erro específico: ${err}`) // Tratar um erro de um then específico. Vai ser o 1º tratamento de erro encontrado dentro da função caso usar Try/Catch
    )
    .then(() => console.log('Quase fim')) // Se ocorrou um erro antes, não haverá valores disponíveis aqui
    .catch(err => console.log(`Erro: ${err}`)) // Tratar o erro
    .then(() => console.log('Fim')) // Pode-se ter then após catch, mas não se terá nenhum outro dado. Preferível deixar catch ao final