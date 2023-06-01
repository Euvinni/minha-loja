import React, { useState } from 'react'


const Exercicio02 = () => {

  const [number, setNumber] = useState([23, 32, 51, 0, 6, 2, 4]) 

    const filtrarNumeros = number.filter(num => num > 5)
    console.log(filtrarNumeros); 

  return (
    <div>
      <h2>Numeros filtrados maior que 5</h2>
      {filtrarNumeros.map(numerosFiltrados =>(
            <li>{numerosFiltrados}</li>
      ))}
      
    </div>
  )
}

export default Exercicio02
