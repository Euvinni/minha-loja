import React, { useState } from 'react'

const Exercicio07 = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("")


    const cleanInput = (e) => {
        e.preventDefault()

        if(nome === ""){
            alert ("Preencha o campo de Nome:")
        }else if(email === ""){
            alert ("Preencha o campo de E-mail:")
        }else{
            alert(`Dados corretos! \n Nome: ${nome} e Email: ${email}`) 
            setNome("")
            setEmail("")
        }

    }

  return (
    <div>
        <h2>Exercicio de form</h2>
    <form type="submit">
    <label>Nome:
        <input type='text'
        value={nome}
        onChange={(e) => setNome(e.target.value)}/>
    </label>
    <br />
    <label>E-mail:
        <input type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/> 
    </label>
    <br />
    <button onClick={(cleanInput)}>Enviar</button>
    </form>
    </div>
  )
}

export default Exercicio07
