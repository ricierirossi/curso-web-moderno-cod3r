import React from 'react';
import Button from './Button';

const Quotes = ( ) =>{
    const botaoFoiClicado = () => {
        console.log('eu fui clicado');
        const fraseAleatoria = {
            quoteText: "Do what you love and the money will follow.",
            quoteAuthor: "Marsha Sinetar",
            quoteGenre: "money"
        };
    };

    return(
        <Button 
            text="Oi eu sou um botão"
            onClick={e => botaoFoiClicado(e)}
        ></Button>
    );
}
// https://quote-garden.onrender.com/api/v3/quotes
export default Quotes;


