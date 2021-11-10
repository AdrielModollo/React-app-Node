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
        <Card titulo="Desafio Aleatório"> 
            <Aleatorio min={1} max={60} />
        </Card>
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Adriel" nota={8.7}
        />
        <Primeiro></Primeiro>
    </div>
