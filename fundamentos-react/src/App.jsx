import './App.css'
import React from 'react'

import Familia from "./components/basicos/Familia"
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
            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia></Familia>
            </Card>

            <Card titulo="Desafio Aleatório" color="#000000">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="Fragmento"  color="#E94C6F"> 
                <Fragmento  />
            </Card>

            <Card titulo="Com parametro"  color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Adriel" nota={8.7}
                />
            </Card>

            <Card titulo="Primeiro Componente"  color="#588C73">
                <Primeiro />
            </Card>
        </div>    
    </div>
