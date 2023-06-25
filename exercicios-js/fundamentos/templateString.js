const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
/*
    Template String não precisa ser feito em múltiplas linhas, aqui foi feito
    apenas para mostrar que esse procedimento considera espaços e quebras de linha.
    É interpretado aquilo que está dentro do ${}. Template String é delimitado pela crase ``
*/
const template = `
    Olá 
    ${nome}!` 
console.log(concatenacao, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up =  texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

