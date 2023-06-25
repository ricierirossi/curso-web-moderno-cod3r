/*
    Quando o if se vale apenas de uma sentença de código, não há necessidade de se colocar esta sentença dentro de um par de 
    chaves. Portanto, o exemplo abaixo o primeiro console.log faz parte da estrutura do if mas o segundo sempre será imprimido
    por não estar denro do if.
*/

function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // Atenção ao ; aqui
        console.log(num) 
    }
}

teste2(6)
teste2(8)

/*
    Neste caso, a função teste2 é o mesmo que:

    function teste2(num) {
    if(num > 7)
        ; 
    
    { 
        console.log(num) 
    }
}

    Entre a condicional e o ; existe uma sentença de código vazia. Ela faz parte do if. Já o console.log faz parte apenas da 
    função, então sempre será executado.

    !!!!! Evitar usar ; com as estruturas de controle !!!!!

*/