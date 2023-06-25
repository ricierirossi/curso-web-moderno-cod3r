import React from 'react';
import ReactDOM from 'react-dom'; // se estivesse 'react-dom/client' tem que tirar o client 
import './index.css';
import Calculator from './main/Calculator';
  


ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>,
  document.getElementById('root'))

