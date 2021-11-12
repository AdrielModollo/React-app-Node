import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

//Alt + Shift + F <=formata

export default () =>
    <div className="App">
        <h1> Fundamentos React </h1>

        <div className="Cards">
            <Card titulo="Desafio Aleatório" color="#000000">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="Fragmento"> 
                <Fragmento  />
            </Card>

            <Card titulo="Com parametro">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Adriel" nota={8.7}
                />
            </Card>

            <Card titulo="Primeiro Componente">
                <Primeiro />
            </Card>
        </div>    
    </div>
