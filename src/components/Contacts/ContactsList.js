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

    deleteContact = id => {
        const contactsCopy = [...this.state.contactsList]
        contactsCopy.splice(id, 1)
        this.setState({ contactsList: contactsCopy })
    }

    render() {

        return (
            <>
                {this.state.contactsList.map(elm => <ContactsCard key={elm.id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} removeContact={this.deleteContact} />)}


            </>
        )
    }
}

export default ContactsList