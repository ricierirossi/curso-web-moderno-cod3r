/*
    Em JS, o switch tem como comportamento padrão executar todos os cases abaixo do inicial. Isto é, para o exemplo abaixo caso 
    nota fosse 10, ele iria executar o que está dentro do case 10, depois case 9, case 8 e assim por diante. Para evitar isso,
    é preciso usar a palavra reservada break.
*/

const imprimir = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra') // Se for 10 ou 9 executa este console.log
            break
        case 8: case 7: // Pode ser escrito na mesma linha também
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // Se não entrar em nenhum case anterior, ele entra no default
            console.log('Nota inválida')
    }
}

imprimir(10)
imprimir(8.9)
imprimir(6.55)
imprimir(2.3)
imprimir(-1)
imprimir(11)