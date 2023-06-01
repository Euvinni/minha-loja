import React, { useState } from 'react'

const Exercicio03 = () => {
    
    const [panda, setPanda] = useState(["Dragão", "Cachorro", "Fada", "Panda"])

  const procuraPanda = [];

  panda.forEach((dragaoGuerreiro) => {
    if (["Panda"].includes(dragaoGuerreiro)) {
      procuraPanda.push(dragaoGuerreiro);
    };
})

  return (
    <div>
      <h2>Dragão Guerreiro invocado</h2>
    <ul>
    {panda.map(nomes => (
        <li>{nomes}</li>
    ))}
      <br/>  
      {procuraPanda.map(pandaWin => (
        <li>{pandaWin}</li>
    ))}
    </ul>
    </div>
  )
}

export default Exercicio03



// import React, { useState } from 'react'

// const Ex03 = () => {

//   const [pandaName, setPandaName] = useState(["Dragão", "Cachorro", "Fada", "Panda"])

//   const filterNamePanda = pandaName.includes("Panda")

//   return (
//     <div>
//       <ul>
//         {pandaName.map(name => (
//           <li>{name}</li>
//         ))}
//       </ul>
//       <p>A palavra Panda {filterNamePanda ? 'sim' : 'não'} consta na lista </p>
//     </div>
//   )
// }

// export default Ex03