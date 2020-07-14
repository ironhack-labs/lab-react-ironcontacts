import React, { Component } from 'react'
import ContactsCard from './ContactsCard'
import contacts from '../../contacts.json'



class ContactsList extends Component {
    constructor() {
        super()
        this.state = {
            contactsList: contacts.splice(0, 5)
        }
    }


    render() {
        return (
            <>
                {this.state.contactsList.map(elm => <ContactsCard name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} />)}

            </>
        )
    }
}

export default ContactsList