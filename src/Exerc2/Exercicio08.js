import React, { useState } from 'react'

const Exercicio08 = () => {

    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const [resultado, setResultado] = useState("")

    const calculo = (e) => {
        e.preventDefault()

        const calculadora = peso / (altura * altura) 
        
        const resultado = calculadora.toFixed(2)

        if (resultado < 17) {
            setResultado(`IMC ${resultado} - Muito abaixo do peso`)
          } else if (resultado > 17 && resultado <= 18.49) {
            setResultado(`IMC ${resultado} - Abaixo do peso`)
          } else if (resultado > 18.5 && resultado <= 24.99) {
            setResultado(`IMC ${resultado} - Peso normal`)
          } else if (resultado >= 25 && resultado <= 29.99) {
            setResultado(`IMC ${resultado} - Acima do peso`)
          } else if (resultado >= 30 && resultado <= 34.99) {
            setResultado(`IMC ${resultado} - Obesidade 1`)
          } else {
            setResultado(`IMC ${resultado} - Obesidade 2`)
          }
          
          setAltura("")
          setPeso("")

    }






  return (
    <div>
        <h2>Exercicio de Calculadora</h2>
      <label>Digite a sua altura:
        <input 
        type='number'
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
      </label>
      <br />
      <label>Digite o seu peso:
        <input 
        type='number'
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculo}>Calcular IMC</button>
      <h4>{resultado}</h4>
    </div>
  )
  }


export default Exercicio08
