import React from "react";

/* Quando coloca export default a função deve ser anônime */
export const BoaTarde = props => <h1>Boa tarde, {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite, {props.nome}!</h1>

// export default BoaTarde // Para exportar ele fora das {} no arquivo index.js

// Também pode ser exportado assim:
export default {BoaTarde, BoaNoite}