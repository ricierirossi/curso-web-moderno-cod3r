// React é uma biblioteca, não um framework, tecnicamente. Trabalha apenas com a camada de visão dos seus componentes.

import React from 'react'
import ReactDOM from 'react-dom' // Parte do react que conversa com a dom

// import Primeiro from './componentes/Primeiro' // Todos componentes criados devem começar com letra maiúscula (o arquivo não precisa)
import BomDia from './componentes/BomDia' // Todos componentes criados devem começar com letra maiúscula (o arquivo não precisa)

import {BoaTarde, BoaNoite} from './componentes/Multiplus' // Se o BoaTarde fosse exportado com export defaul, ele poderia estar fora da {}

import Saudacao from './componentes/Classe'

import Saudacao2 from './componentes/Classe2'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

import Multiplus from './componentes/Multiplus'

ReactDOM.render(
    <div>
        <Multiplus.BoaNoite></Multiplus.BoaNoite>
        <Multiplus.BoaTarde></Multiplus.BoaTarde>
    </div>, 
    document.getElementById('root')
)

/*  
    A função render() vai passar um código como parâmetro.
    root é o id que está no html ./public/index.html 
    O elemento <h1> (que não é html, mas sim JS) vai ser colocado dentro dele.
    Isso não é JS puro, é uma sintaxe do React chama JSX (um java script extendido).
    Poderia ser escrito assim também:
        const elemento = <h1>React 2</h1>
        ReactDOM.render(elemento, document.getElementById('root')) 
*/
// ReactDOM.render(<h1>React</h1>, document.getElementById('root')) 

// ReactDOM.render(<Primeiro />, document.getElementById('root')) 

// ReactDOM.render(<BomDia nome='Guilherme' idade={10} />, document.getElementById('root')) 

// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))

// As propriedades recebidas (tipo e nome) são apenas leitura. Se quiser mudar, deve trabalhar com state ao invés de props
// ReactDOM.render(
//     <div>
//         <Saudacao2 tipo='Bom dia' nome='João'></Saudacao2> 
//     </div>
//     , document.getElementById('root')
// )

// ReactDOM.render(
//     <div>
//         <Pai nome='Marcos' sobrenome='Silva'></Pai>
//     </div>
//     , document.getElementById('root')
// )

// ReactDOM.render(
//     <div>
//         <Pai nome='Marcos' sobrenome='Silva'></Pai>
//         {/* Como passar os componentes filhos diretamente aqui: */}
//         <Filho nome='Pedro' sobrenome='Silva'></Filho>
//         <Filho nome='Marcos' sobrenome='Silva'></Filho>
//         <Filho nome='Carla' sobrenome='Silva'></Filho>

//     </div>
//     , document.getElementById('root')
// )