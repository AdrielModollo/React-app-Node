import ReactDOM from 'react-dom' //Renderiza uma String normal na tela
import React from 'react' //Faz a conversão de html para Javascript

const el = document.getElementById('root') // Recupera o id root em nosso index.js dentro da div
ReactDOM.render(
    <div> 
        <strong> Olá React!!! </strong>
    </div>
    , el
)