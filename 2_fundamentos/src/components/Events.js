const Events = () => {
    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("botão 1")
    };

    const renderSomething = (x) =>{
        if(x) {
            return <h2>Renderizando isso</h2>;
        }else{
            return <h2>Renderizando aquilo</h2>;
        }
    }

    return(
        <div>
            <div>
                {/*Sem parâmetros para função ser executada apenas ao clicar*/}
                <button onClick={handleMyEvent}>Botão 1</button>
                <button onClick={() => console.log("Botão 2")}>Botão 2</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events;