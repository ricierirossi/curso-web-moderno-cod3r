// Par Nome/Valor
const saudacao = 'Opa' // Contexto lexico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto lexico 2
    return saudacao 
}

// Objeto são grupos aninhados de pares nome/valor 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
