import { useState } from "react";
import contactsList from "./../../contacts.json";

const Contacts = () => {

    const [contacts, setContacts] = useState(contactsList.slice(0, 7));

    const addClebrity = () => {
        const celebrityCopy = [...contacts]
        const randomNumb = parseInt(Math.random() * (contactsList.length - 0) + 0);
        celebrityCopy.push(contactsList[randomNumb])

        return setContacts(celebrityCopy)

    }
    const sortCelebrity = () => {
        const celebrityCopy = [...contacts]
        celebrityCopy.sort((x, y) => x.name.localeCompare(y.name))


        return setContacts(celebrityCopy)
    }
    const sortCelebrityByPopularity = () => {
        const celebrityCopy = [...contacts]
        celebrityCopy.sort((x, y) => y.popularity - x.popularity)


        return setContacts(celebrityCopy)
    }
    const removeCelebrity = idToDelete => {
        const newCelebrity = contacts.filter(elm => elm.id !== idToDelete)
        setContacts(newCelebrity)
    }

    return (

        <table>
            <button onClick={addClebrity}>Meter nueva celebridad </button>
            <button onClick={sortCelebrity}>Ordenar Celebridades</button>
            <button onClick={sortCelebrityByPopularity}>Ordenar Celebridades por fama</button>

            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Popularidad</th>
                    <th>Ganó un Oscar</th>
                    <th>Ganó un EMI</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map(({ name, pictureUrl, id, popularity, wonOscar, wonEmmy }) => {
                        return (
                            <tr>
                                <td>
                                    <img src={pictureUrl} alt={name} style={{ width: '200px' }} />
                                </td>
                                <td>
                                    {name}
                                </td>
                                <td>
                                    {popularity.toFixed(2)}
                                </td>
                                <td>{wonOscar ? "🏆" : ""}</td>
                                <td>{wonEmmy ? "🏆" : ""}</td>
                                <button onClick={() => removeCelebrity(id)}>Borrar celerbridad</button>
                            </tr>
                        )

                    })
                }
            </tbody>

        </table>
    )
}

export default Contacts