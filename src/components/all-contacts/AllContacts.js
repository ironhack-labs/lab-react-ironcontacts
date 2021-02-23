import './AllContacts.css'
import { Component } from 'react'

import ContactTable from '../contact-table/ContactTable'
import contacts from './../../contacts.json'

class AllContacts extends Component {
    constructor() {
        super()
        this.state = {
            allContacts: contacts,
            firstContacts: contacts.filter((contact, idx) => idx < 5)
        }
    }

    addRandom() {
        const contact = this.state.allContacts[Math.floor(Math.random() * (this.state.allContacts.length -5 + 1)) + 5]

        const firstContactsCopy = [...this.state.firstContacts]
        firstContactsCopy.push(contact)

        this.setState({
            firstContacts: firstContactsCopy
        })
    }

    render() {
        const { firstContacts } = this.state

        console.log( firstContacts )

        return(
            <>
                <h1>IronContacts</h1>
                {firstContacts.map( (elm) => <ContactTable  {...elm} key={elm.id}/>)}
                <button onClick={() => this.addRandom()}>Add random contact</button>
            </>
        )
    }
}

export default AllContacts