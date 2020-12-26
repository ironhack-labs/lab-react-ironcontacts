import { useState } from 'react'
import allContacts from '../contacts.json'
import ContactCard from './ContactCard'

const ContactsList = () => {

    const [contacts, setContacts] = useState(allContacts.slice(0, 5))

    const addRandomContact = () => {
        const randomIdx = Math.floor(Math.random() * ((allContacts.length - 1) - contacts.length + 1) + contacts.length)
        const selected = allContacts[randomIdx]

        contacts.includes(selected) ? addRandomContact() : setContacts([...contacts, selected])
    }

    const sortListByName = () => {
        const sortedName = [...contacts].sort((a, b) => a.name.localeCompare(b.name))

        setContacts(sortedName)
    }

    const sortListByPopularity = () => {
        const sortedPopularity = [...contacts].sort((a, b) => b.popularity - a.popularity)

        setContacts(sortedPopularity)
    }

    const removeContact = id => {
        const filtered = [...contacts].filter(elm => elm.id !== id)

        setContacts(filtered)
    }

    return (
        <>

            <div className="buttons">
                <button onClick={addRandomContact}>Add Random Contact</button>
                <button onClick={sortListByName}>Sort By Name</button>
                <button onClick={sortListByPopularity}>Sort By Popularity</button>
            </div>

            <table className="contacts-table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((elm, idx) =>
                        <ContactCard {...elm} removeContact={removeContact} key={idx} />)}
                </tbody>
            </table>

        </>
    )
}

export default ContactsList

