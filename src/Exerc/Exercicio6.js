import React from 'react'

const Exercicio6 = () => {

    const cores = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo'];


    const coresPrimarias = [
        cores.filter((item) => ((item === 'vermelho'))), 
        cores.filter((item) => ((item === 'azul'))), 
        cores.filter((item) => ((item === 'amarelo')))
        ];


    if(cores.includes('vermelho') && cores.includes('azul') && cores.includes('amarelo')){
        console.log("Tem cores primárias");
    }else{
        console.log("Não tem cores primárias");
    }


  return (
    <div>
      <h2>Exercicio 06</h2>

    <div>
    {cores.map((item, index) => (
        <div key={index}> 
            <li>{item}</li>
        </div>
      ))}
    </div>

      {coresPrimarias.map((item, index) => (
        <div key={index}> 
            <li>{`São cores primárias: ${item}`}</li>
        </div>
      ))}
    </div>
  )
}

export default Exercicio6
