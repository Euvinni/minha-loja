import React, { useState }  from 'react'

const Exercicio05 = () => {

    const [filtrarNomeECidade, setFiltrarNomeECidade] = useState([
    { nome: "Alice", idade: 25, cidade: "São Paulo" },
    { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carol", idade: 40, cidade: "São Paulo" },
    { nome: "David", idade: 28, cidade: "São Paulo" },
    { nome: "Eve", idade: 32, cidade: "São Paulo" }])

        const filter = filtrarNomeECidade.filter(item => item.idade > 30 && item.cidade === "São Paulo")

  return (
    <div>
        <h2>Filtragem maior de 30 e cidade de São Paulo</h2>
      {filtrarNomeECidade.map(filtragem => (
        <li>{filtragem.nome}, {filtragem.idade} anos, {filtragem.cidade}</li>
      ))}
      <br />
      {filter.map(filtragem => (
        <li>{filtragem.nome}, {filtragem.idade} anos, {filtragem.cidade}</li>
      ))}
    </div>
  )
}

export default Exercicio05
