import React from "react";
import Main from '../template/Main'

export default props => {
    return (
        <Main icon="home" title="Início"
            subtitle="Segundo projeto de React">
            <div className='display-4'>Bem vindo!</div>
            <hr />
            <p className='mb-o'>Sistema para exemplificar a construção 
            de um cadastro desenvolvido em React.</p>
        </Main>
    )
}