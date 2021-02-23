import './AllContacts.css'
import { Component } from 'react'

import ContactTable from '../contact-table/ContactTable'
import contacts from './../../contacts.json'

class AllContacts extends Component {
    constructor() {
        super()
        this.state = {
            fiveContacts: contacts.filter((contact, idx) => idx < 5)
        }
    }

    render() {
        const { fiveContacts } = this.state

        console.log( fiveContacts )

        return(
            <div className="contacts-table">
                <h1>IronContacts</h1>
                {fiveContacts.map( (elm) => <ContactTable  {...elm} key={elm.id}/>)}
            </div>
        )
    }
}

export default AllContacts