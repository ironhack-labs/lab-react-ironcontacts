import React, { useState } from 'react'
import contacts from '../contacts.json';
import TableRow from './TableRow';
import RandomButton from './RandomButton';


/*class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactList: [...contacts]
        }
    }
    createContacts = () => {
        return this.state.contactList
            .filter((c,i) => i < 5)
            .map(contact => <TableRow key={contact.id} {...contact} />)
    }
    addRandomContact = () => {
        const initialState = contacts.filter((c,i) => i < 5)
        this.setState(() => ({contactList: initialState}))

    }
    render() {
        return (
            <div>
                <RandomButton clickRandomBtn={() => this.addRandomContact()}/>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>        
                        {this.createContacts()} 
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table*/

//import React from 'react'

const Table = (props) => {
    const initialContacts = contacts.filter((c,i) => i < props.contacts)
    const initialState = {contactList: initialContacts}
    const [state, setState] = useState(initialState);
    const createContacts = () => {
        return state.contactList.map(contact => <TableRow key={contact.id} {...contact} />)
    }
    const addRandomContact = () => {
        const actualList = [...state.contactList]
        const randomContact = contacts[Math.floor(Math.random()*contacts.length)]
        actualList.push(randomContact)
        setState((state) => ({...state, contactList: actualList}))
    }
    return (
        <div>
            <RandomButton clickRandomBtn={() => addRandomContact()}/>
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
