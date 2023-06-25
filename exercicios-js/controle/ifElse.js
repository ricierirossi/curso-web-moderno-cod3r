const imprimir = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimir(6)
imprimir(8)
/* Cuidado com este caso abaixo, por ser uma string ele acaba retornando Reprovado já que não é >= 7. Mas pode ser um
problema já que não é valor de nota. Ideal testar se o valor é do tipo correto já que o JS é fracamente tipado. */
imprimir('Epa') 