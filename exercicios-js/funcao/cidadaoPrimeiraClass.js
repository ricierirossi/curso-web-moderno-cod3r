// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() { }

// Armazenar uma função (anônima) em variável,const
const fun2 = function () { }

// Armazenar uma função em array
const array = [function (a, b) {return a + b}, fun1, fun2] // Declarar no corpo do array, Literal ou em var/const
console.log(array[0](2, 3)) // Executando a função

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar uma função como parâmetro para outra função
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)