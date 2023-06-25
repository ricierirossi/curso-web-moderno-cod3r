function falarDepoisDe (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // Aceita apenas um parâmetro. Pode-se trocar resolve por reject para trabalhar com o erro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'legal')
    .then(frase => frase.concat('!!!')) // A função .then é da Promise, e é chamada quando você resolve a Promise
    .then(outraFrase => console.log(outraFrase)) // Pode ser encadiado um .then após o outro
    .catch(e => console.log('Vish')) // .catch é usado para tratar o erro (teste apagando o parâmetro na chamada da função)