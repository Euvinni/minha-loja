import React, { useState } from 'react'

const Exercicio01 = () => {

    const [nomes, setNomes] = useState(['Vinicius', 'Anderson', 'Laércio', 'Joãozin', 'Panda'])

    const filtrarNomesComA = nomes.filter(nome => nome.toLowerCase().includes('a'))

    console.log(filtrarNomesComA);

  return (
    <div>
      <h2>Array de nomes com a letra A</h2>
      <ul>
        {filtrarNomesComA.map(nomeA => (
            <li>{nomeA}</li>
        ))}
      </ul>
    </div>
  )
}

export default Exercicio01
