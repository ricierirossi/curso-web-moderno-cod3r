import React from 'react'   
import { ReactComponent as Logo } from '../components/images/refresh.svg';
import '../styles/header.css'

const Header = ( ) =>{
    return(

        <header>
            <div className='button'>
                <div className='button-container'>
                    <div className='random'>random</div>
                    <Logo className='refresh' />
                </div>
            </div>
        </header>

    )
}

export default Header;


