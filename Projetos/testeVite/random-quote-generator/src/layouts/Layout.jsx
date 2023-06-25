import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout =({children}) =>{
    return(
        <div className='container'>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;