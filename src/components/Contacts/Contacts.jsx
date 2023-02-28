import contactsArray from "../../contacts.json"
import { useState } from "react"


const Contacts = () => {

    const newArray = contactsArray.slice(0, 5)
    const [contacts, setContacts] = useState(newArray)

    const addContact = () => {
        const randomFromArray = contactsArray[Math.floor(Math.random() * contactsArray.length)]

        const contactsCopy = [...contacts]

        contactsCopy.unshift(randomFromArray)

        setContacts(contactsCopy)

    }


    return (
        <section className="list">
            <h1>List of Contacts</h1>
            <div className="buttons">
                <h2><button onClick={addContact}>Add Random Contact</button></h2>
                <h2><button>Sort by Popularity</button></h2>
                <h2><button>Sort by Name</button></h2>
            </div>
            <table className="list1">
                <th>Image</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>

            </table>
            {
                contacts
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(({ id, pictureUrl, name, popularity, wonOscar, wonEmmy }) => {
                        return (
                            <article className="article" key={id}>
                                <div>
                                    <th><img src={pictureUrl} alt="{id}" /></th>
                                    <th><p>{name}</p></th>
                                    <th><p>{popularity}</p></th>
                                    <th><p>{wonOscar && '🏆'}</p> </th>
                                    <th><p>{wonEmmy && '🏆'}</p> </th>
                                </div>
                            </article>
                        )
                    })
            }

        </section>
    )
}

export default Contacts