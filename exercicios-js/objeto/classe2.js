class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Definindo Avo como protótipo de Pai
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Chama o constructor de Avo passando o parâmetro
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)