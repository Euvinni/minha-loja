import React from 'react'

const Exercicio3 = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numerosPares = numeros.filter((item) => item % 2 === 0)
  return (
    <div>
        {numerosPares.map((number, index) => (
            <li key={index}>É par: {`${number} `}</li>
        ))}
    </div>
  )
}

export default Exercicio3
