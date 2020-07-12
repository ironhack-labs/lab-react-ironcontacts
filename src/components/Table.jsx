import React, { useState } from 'react'
import contacts from '../contacts.json';
import TableRow from './TableRow';
import RandomButton from './RandomButton';

const Table = (props) => {
    //Set initial state
    const initialContacts = contacts.filter((c,i) => i < props.contacts)
    const initialState = {contactList: initialContacts}
    const [state, setState] = useState(initialState);
    const createContacts = () => {
        return state.contactList.map(contact => <TableRow key={contact.id} {...contact} />)
    }
    //Event handler button 'Add Random Contact'
    const addRandomContact = () => {
        const actualList = [...state.contactList]
        const randomContact = contacts[Math.floor(Math.random()*contacts.length)]
        if (actualList.findIndex(item => item.id === randomContact.id) === -1) {
            actualList.push(randomContact)
        } else {
            console.log('Contact already on the list')
            return
        } 
        setState((state) => ({...state, contactList: actualList}))
    }
    //Event handler button 'Sort by name'
    const sortContacts = () => {
        const contacts = [...state.contactList]
        contacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        setState((state) => ({...state, contactList: contacts}))
    }
    //Event handler button 'Sort by popularity'
    const sortPopularity = () => {
        const contacts = [...state.contactList]
        contacts.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
        setState((state) => ({...state, contactList: contacts}))
    }
    //Render return
    return (
        <div>
            <RandomButton function='Add Random Contact' clickBtn={() => addRandomContact()}/>
            <RandomButton function='Sort by name' clickBtn={() => sortContacts()}/>
            <RandomButton function='Sort by popularity' clickBtn={() => sortPopularity()}/>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>        
                    {createContacts()} 
                </tbody>
            </table>
        </div>
    )
}

export default Table
