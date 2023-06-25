import React from 'react'

export default props => 
// props é convenção
// Mais de uma tag na mesma função devem estar envolvidas por uma outra tag. Caso não queira colocar uma tag específica
// é possível usar a tag <React.Fragment></React.Fragment> no lugar. Ou ainda, importar { Fragment } e trocar o 
//<React.Fragment></React.Fragment> por apenas <Fragment></Fragment> 
<div> 
    <h1>Bom dia, {props.nome}!</h1> 
    <h2>Sua idade é {props.idade}</h2>
</div>

// Também é possível escrever assim: 
//         export default props => [
//                 <h1 key='ch1'>Bom dia, {props.nome}!</h1>, 
//                 <h2 key='ch2'>Sua idade é {props.idade}</h2>
//         ]

// É importante quando estiver usando o array [] que cada elemento tenha uma key diferente para otimizar a busca pelo elemento
