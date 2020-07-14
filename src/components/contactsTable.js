import React, { useState } from 'react'
import contacts from '../contacts.json'
import ContactRow from './contactRow'
import RandomButton from './randomButton';


const ContactTable = (props) => {
    const initialContacts = contacts.filter((c, i) => i < props.contacts)
    const initialState = { contactList: initialContacts }
    const [state, setState] = useState(initialState);
    const createContacts = () => {
        return state.contactList.map(contact => <ContactRow key={contact.id} {...contact} deleteBtn={() => deleteContact(contact.id)} />)
    }
    const addRandomContact = () => {
        const actualList = [...state.contactList]
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        actualList.push(randomContact)
        setState((state) => ({ ...state, contactList: actualList }))
    }
    const sortContacts = () => {
        const contacts = [...state.contactList]
        contacts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        setState((state) => ({ ...state, contactList: contacts }))
    }
    const sortPopularity = () => {
        const contacts = [...state.contactList]
        contacts.sort((a, b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
        setState((state) => ({ ...state, contactList: contacts }))
    }
    const deleteContact = (id) => {
        const contacts = [...state.contactList]
        const contactIndex = contacts.findIndex(item => item.id === id)
        contacts.splice(contactIndex, 1)
        setState((state) => ({ ...state, contactList: contacts }))
    }
    return (
        <div>
            <RandomButton function='Add Random Contact' clickBtn={() => addRandomContact()} />
            <RandomButton function='Sort by name' clickBtn={() => sortContacts()} />
            <RandomButton function='Sort by popularity' clickBtn={() => sortPopularity()} />            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {createContacts()}
                </tbody>
            </table>
        </div>
    )
}
export default ContactTable