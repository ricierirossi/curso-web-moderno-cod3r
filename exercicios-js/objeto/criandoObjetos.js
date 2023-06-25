// Criando objetos de forma literal
const obj1 = {}
console.log(obj1)

// Criando objetos utilizando Object
const obj2 = new Object
console.log(obj2)

// Criando objetos utilizando funções construtoras próprias
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('caderno', 30, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Criando objetos utilizando funções Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario()) 

// Criando objetos utilizando create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Criando objetos utilizando uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)