import React, { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(true)

    const [name, setName] = useState("Sanders")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim</p>}
        <h1>If ternário</h1>
        {name === "George" ? (<p>O nome é George</p>) : (<p>Nome não encontrado</p>)}
        <button onClick={() => setName("George")}>Clique aqui</button>
    </div>
  )
}

export default ConditionalRender