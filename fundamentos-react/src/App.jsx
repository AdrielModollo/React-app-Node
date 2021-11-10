import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'



export default function (props){ //Função anonima necessário retornar com default
    return (
        <div id="app"> 
            <h1> Fundamentos React </h1>
            <Fragmento />
            <ComParametro 
                    titulo="Situação do aluno" 
                    aluno="Adriel" nota={8.7}
            />
            <Primeiro></Primeiro>
        </div>
    );
}