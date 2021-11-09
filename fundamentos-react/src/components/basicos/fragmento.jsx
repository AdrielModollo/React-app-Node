import React from 'react'

export default function Fragmento(props){
    return (
        //Quando envolvido com div solucionamos o problema, mas quando passamos o elemento sem envolver o conteudo ocorre o erro
        //React.Fragment outra forma de soluciona o problema
        // <> outra solução, porém não conseguimos passar atributos nesta sintaxe reduzida
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}