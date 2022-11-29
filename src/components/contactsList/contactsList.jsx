import { useState } from 'react'
import contacts from '../../contacts.json'
import ContactsCard from '../contactsCard/contactsCard'

const ContactsList = () => {

    const fiveContacts = contacts.slice(0, 5)

    const [contact, setContact] = useState(fiveContacts)

    const addContact = () => {

        const randomContact = Math.floor(Math.random() * (contacts.length) - 1)
        const newContact = contacts[randomContact]
        const contactCopy = [...fiveContacts]
        contactCopy.push(newContact)
        setContact(contactCopy)

    }

    return (
        <section>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                </tr>
            </thead>

            <button onClick={addContact}>Add New Random Contact</button>
            <button onClick={addContact}>Sort Contacts by Name</button>
            <button onClick={addContact}>Sort Contacts by Popularity</button>

            {contact.map(elm => {
                return <ContactsCard key={elm.id} {...elm} />
            })}
        </section>
    );
}

export default ContactsList

