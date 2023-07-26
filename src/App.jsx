import { useState } from "react"
import "./App.css"
import contactsList from "./contacts.json"

function App() {
    const [contacts, setContacts] = useState(contactsList.slice(0, 5))
    const [remainingContacts, setRemainingContacts] = useState(contactsList.slice(5))

    const addRandomContact = () => {
        const remainingContactsRandomIndex = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]
        const contactsCopy = [...contacts]
        const remainingContactsCopy = [...remainingContacts]
        const chosenContactArray = remainingContactsCopy.splice(remainingContactsRandomIndex, 1)
        contactsCopy.unshift(chosenContactArray[0])
        setContacts(contactsCopy)
        setRemainingContacts(remainingContactsCopy)
    }

    const sortByPopularity = () => {
        const contactsCopy = [...contacts]
        contactsCopy.sort((a, b) => {
            return b.popularity - a.popularity
        })
        setContacts(contactsCopy)
    }

    const sortByName = () => {
        const contactsCopy = [...contacts]
        contactsCopy.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        setContacts(contactsCopy)
    }

    const removeContactById = contactId => {
        const contactsCopy = [...contacts]
        const remainingContactsCopy = [...remainingContacts]
        const contactIndexToRemove = contactsCopy.findIndex(contact => {
            return contact.id === contactId
        })
        const removedContactArray = contactsCopy.splice(contactIndexToRemove, 1)
        remainingContactsCopy.push(removedContactArray[0])
        setContacts(contactsCopy)
        setRemainingContacts(remainingContactsCopy)
    }

    return (
        <div className="App">
            <h1>LAB | React IronContacts</h1>
            <div id="buttons">
                <button onClick={addRandomContact}>Add random contact</button>
                <button onClick={sortByPopularity}>Sort by popularity</button>
                <button onClick={sortByName}>Sort by name</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => {
                        return (
                            <tr key={contact.id}>
                                <td>
                                    <img src={contact.pictureUrl} alt="contact picture" />
                                </td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity.toFixed(2)}</td>
                                <td>{contact.wonOscar && "🏆"}</td>
                                <td>{contact.wonEmmy && "🌟"}</td>
                                <td>
                                    <button onClick={() => removeContactById(contact.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default App
