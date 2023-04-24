import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //testando comentários
    return(
        <div>
            {/* testando comentários */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;