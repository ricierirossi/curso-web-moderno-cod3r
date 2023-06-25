import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
// Header está sendo referenciado no Main que por sua vez
// está sendo referenciado no Home que po sua vez está
// sendo referenciado no Routes
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

