import React from 'react'

export default function ComParametro(props){
    //const sub = props.subtitulo
    const status = props.nota >= 7 ? ' Aprovado' : ' Recuperação'
    const notaInt =  Math.ceil(props.nota) // Propriedas são somente leitura, função math para arredondamento!
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong> { props.aluno } </strong> 
                tem nota 
                <strong> { notaInt } </strong>
                e está
                <strong> { status } </strong>
            </p>
        </div>
    )
}