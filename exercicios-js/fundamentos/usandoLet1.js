var numero = 1 // Poderia ser let também, já que tem um escopo mais abrangente que a outra.
{
    // Variáveis let possuem escopo GLOBAL, de FUNÇÃO ou de BLOCO. Por isso foi possível declarar com o mesmo nome.
    let numero = 2
    console.log('dentro = ', numero) // Busca numero dentro do escopo, se não existir busca em um escopo mais abrangente.
}
console.log('fora = ', numero)