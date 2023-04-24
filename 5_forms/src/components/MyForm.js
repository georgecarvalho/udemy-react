import "./MyForm.css"
import {useState} from "react"

const MyForm = ({user}) => {
    //3 - Gerenciamento de dados
    //6 - Controlled inputs
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Enviando o formulario")
        console.log(name, email, bio, role)

        //7 - limpar form
        setName("")
        setEmail("")
        setBio("")
    }

  return (
    <div>
        {/*1 - Criação de form*/}
        {/*5 - Envio de form*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            {/*2 - Label envolvendo o input*/}
            <label>
                <span>E-mail</span>
                {/*4 - Simplificação de manipulação de state*/}
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/*8 - Textarea*/}
            <label>
                <span>Decrição</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/*9 - Select*/}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm