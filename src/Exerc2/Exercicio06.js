import React, { useState } from 'react'

const Exercicio06 = () => {

    const [pares, setPares] = useState([2, 23, 21, 4, 6, 8, 10])

    const filtrarPares = pares.filter(num => num % 2 === 0) 

  return (
    <div>
        <h2>Filtragem de números pares</h2>

      <ul>
      {pares.map(numPar => (    
        <li>{numPar}</li>
      ))}
    <br />
        {filtrarPares.map(numPar => (    
        <li>{numPar}</li>
      ))}
      </ul>
    </div>
  )
}

export default Exercicio06
