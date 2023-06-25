const a = 1
const b = 2
const c = 3

// Antigamente, para atribuir o valor da variável 'a' para um atributo com nome 'a'
const obj1 = {a: a, b: b, c: c}
// Atualmente
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAtr = 'nota'
const valorAtr = 6

const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)

const obj4 ={[nomeAtr]: valorAtr}
console.log(obj4)

// Criando funções dentro do objeto
const obj5 = {
    // Antigamente
    funcao1: function () {
        // ... 
    }, 
    // Atualmente
    funcao2() {

    }
}
console.log(obj5)