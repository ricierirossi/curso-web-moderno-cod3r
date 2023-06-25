{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)                
            }
        }
    }
}
console.log(sera) // Variável var dentro de um bloco de código que não seja uma função ficará visível mesmo fora do bloco 

function teste () {
    var local = 123
    console.log(local) // Aqui, local pode ser acessado pois o console.log está dentro do escopo da função.
}

teste()
console.log(local) // A var local não pode ser acessada pois foi declarada dentro da função.

/*
    Resumindo: quando variáveis var são criadas dentro de uma função, ela somente pode ser acessada dentro da função.
    Caso se crie uma var fora do escopo de função, ela se torna uma variável global, podendo ser acessada em qualquer 
    lugar.

    Evitar criar variáveis globais para evitar que o valor seja sobrescrito acidentalmente.

    Variáveis do tipo var possuem escopo GLOBAL ou FUNÇÃO.
*/