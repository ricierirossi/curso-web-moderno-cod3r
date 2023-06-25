// ES8: Object.values / Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, // Cria um atributo com o mesmo noma da variável e o valor da variável
    ola() { // Jeito mais simples de criar uma função em um objeto
        return 'Oi, gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {} 
class Cachorro  extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())