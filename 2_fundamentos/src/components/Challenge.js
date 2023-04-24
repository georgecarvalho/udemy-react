const Challenge = () => {

    const a = 5, b = 6

    const handleSum = () => {
        console.log(a + b)
    }

    return(
        <div>
            <div>
                <h1>Desafio de soma</h1>
                <p>Primeiro número = {a}</p>
                <p>Segundo número = {b}</p>
            </div>
            <button onClick={handleSum}>Soma</button>
        </div>
    )
}

export default Challenge