// Funções construras e factory serve para a mesma coisa: ser um molde para criar objetos.

function CriarPessoa (nome) {
    this.name = nome

    this.fala = function () {
        console.log(`Meu none é ${this.name}`)
    }
}

const pessoa1 = new CriarPessoa('Matheus')
console.log(pessoa1)
pessoa1.fala()

const pessoa2 = new CriarPessoa('Ana')
console.log(pessoa2)
pessoa2.fala()