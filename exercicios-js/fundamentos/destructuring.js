// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

// Destructuring

// Tire de dentro do object pessoa os atributos nome e idade
const { nome, idade } = pessoa 
console.log(nome, idade)

// Tire de dentro do object os atributos nome e idade e atribua às variáveis n e i
const { nome: n, idade: i} = pessoa 
console.log(n, i)

// Testando com atributos inexistentes e passando um valor padrão para um deles
const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada)

// Não cria variável endereco, mas sim logradouro, numero e cep
const { endereco: { logradouro, numero, cep }} = pessoa 
console.log(logradouro, numero, cep)