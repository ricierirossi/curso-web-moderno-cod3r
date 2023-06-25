Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimir = function (nota) {
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }

    console.log('Fim.')
}

imprimir(-5)
imprimir(0)
imprimir(3)
imprimir(5)
imprimir(8)
imprimir(10)