import React, { useState } from 'react'

const Exercicio04 = () => {


    const [age, setAge] = useState([   
    {nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 17 },
    { nome: "Carol", idade: 32 },
    { nome: "David", idade: 14 },
    { nome: "Eve", idade: 19 }]) 

    const filtrarMaioridade = age.filter(num => num.idade > 18)
    console.log(filtrarMaioridade); 
    
  return (
    <div>
        <h2>Maioridade filtrada</h2>
      {age.map(nomes => (
        <li>{nomes.nome} - {nomes.idade}</li>
      ))}
    <br />
      {filtrarMaioridade.map(nomes => (
        <li>{nomes.nome} - {nomes.idade}</li>
      ))}
    </div>
  )
}

export default Exercicio04
