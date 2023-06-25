const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    // Por padrão, forEach pode retornar o valor, índice e array completo de um array (nesta ordem)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)