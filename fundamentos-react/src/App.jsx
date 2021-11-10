import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'



export default (props) => { //Função Arrow
    return (
        <div id="app"> 
            <h1> Fundamentos React (Arrow)</h1>
            <Fragmento />
            <ComParametro 
                    titulo="Situação do aluno" 
                    aluno="Adriel" nota={8.7}
            />
            <Primeiro></Primeiro>
        </div>
    );
}