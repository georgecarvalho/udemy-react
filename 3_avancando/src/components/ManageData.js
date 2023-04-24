import {useState} from 'react'

const ManageData = () => {

    let someData = 10
    const [number, setNumber] = useState(15)

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 10)}>Mudar variavel</button>

            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar state</button>
        </div>
    )
}

export default ManageData