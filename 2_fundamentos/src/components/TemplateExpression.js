const TemplateExpression = () => {
    const name = "George"
    const data = {
        age: 29,
        job: "Programador",
    }

    return(
        <div>
            <h2>Olá, {name}, tudo bem?</h2>
            <p>Você atua como {data.job} </p>
            <p>Você tem {data.age} anos</p>
        </div>
    )
}

export default TemplateExpression