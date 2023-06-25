/*
    Return vai retornar o valor do processamento da função para quem o chamar.
    Por exemplo: se na função temos uma operação de c = (a*b) e um return c, 
    e se houver um console.log(função()), então c será impresso pois o console.log é
    quem chamou a função.

    function mult(a, b){
        let c = a * b
        return c
    }
    
    console.log(mult(2, 3))

*/

function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area} m².`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 15, 22, 100))
console.log(area(5, 5))

