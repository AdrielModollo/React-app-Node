import './index.css' //Para encontrar o arquivo no caminho relativo informado.
import ReactDOM from 'react-dom' //Renderiza uma String normal na tela
import React from 'react' //Faz a conversão de html para Javascript

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const el = document.getElementById('root') // Recupera o id root em nosso index.js dentro da div
ReactDOM.render(
    <div id="app"> 
       <Primeiro></Primeiro>
       <ComParametro 
            titulo="Situação do aluno" 
            aluno="Adriel" nota={8.7}/>
    </div>
    , el
)