import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {

  return (
      <div>
          <FamiliaMembro nome="Adriel" sobrenome={props.sobrenome}/>
          <FamiliaMembro nome="Marina" {...props}/>
          <FamiliaMembro nome="testando" sobrenome="teste"/>
      </div>
  )
};