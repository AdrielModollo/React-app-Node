import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

//Alt + Shift + F <=formata

export default _ =>
    <div id="app">
        <h1> Fundamentos React </h1>
        <Card titulo="Exemplo de card"/> 

        <Aleatorio min={1} max={60} />
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Adriel" nota={8.7}
        />
        <Primeiro></Primeiro>
    </div>
