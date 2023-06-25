let dobro = function (a) {
    return 2 * a
}

console.log(dobro(Math.PI))

// Função Arrow é sempre anônima, para chamar ela é preciso armazenar em uma var/const
dobro = (a) => {
    return 2 * a
}

console.log(dobro(Math.PI))

// Com apenas um parâmetro pode-se tirar os () e quando não se tem {} o return está implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))

//////////////

let ola = function () {
    return 'Olá'
}

console.log(ola())


ola = () => 'Olá'

console.log(ola())