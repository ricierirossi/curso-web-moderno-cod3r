import React from 'react';

const Button = ({triggerParentFunction, text}) =>{
    return(
        <button onClick={triggerParentFunction}>
            {text}
        </button>
    )
}


export default Button;

