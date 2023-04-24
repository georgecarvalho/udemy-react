import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["george", "sanders", "carvalho"])
    const [users, setUsers] = useState([
        {id: 1, name: "george", age: 29},
        {id: 2, name: "sanders", age: 31},
        {id: 3, name: "carvalho", age: 33},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.name} - {item.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender