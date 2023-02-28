import { useState } from 'react'
import contactsArray from '../../contacts.json'
import ContactTr from '../ContactTr/ContactTr'



const ContacsTable = () => {

    const firstFiveContacts = [...contactsArray].slice(0, 5)

    const [contacts, setContacts] = useState(firstFiveContacts)

    const addRandomContact = () => {

        const randomPosition = Math.floor(Math.random() * ((contactsArray.length - 1) - 5) + 5)

        const randomContact = contactsArray[randomPosition]

        const contactCopy = [...contacts]
        contactCopy.unshift(randomContact)

        setContacts(contactCopy)
    }

    const sortContactsByName = () => {
        const contactsCopy = [...contacts]
        const contactsSorted = contactsCopy.sort((elmA, elmB) => {
            const nameA = elmA.name
            const nameB = elmB.name
            return nameA.localeCompare(nameB)
        })

        setContacts(contactsSorted)

    }

    const sortContactsByPopularity = () => {
        const contactsCopy = [...contacts]
        const contactsSorted = contactsCopy.sort((elmA, elmB) => elmB.popularity - elmA.popularity)

        setContacts(contactsSorted)
    }

    return (
        <>
            <button onClick={addRandomContact}>Add random</button>
            <button onClick={sortContactsByName}>Sort by name</button>
            <button onClick={sortContactsByPopularity}>Sort by popularity</button>

            <table >
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won an Oscar</th>
                        <th>Won an Emmy</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => {
                        return <ContactTr key={contact.id} addRandomContact={addRandomContact} {...contact} />
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ContacsTable 