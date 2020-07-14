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



    addRandom = () => {
        let ramdomPick = Math.round(Math.random() * (contacts.length - 1))
        let randomContact = contacts[ramdomPick] //from original contacts array
        let contactsCopy = [...this.state.contactsList] //copy from spliced arr
        contactsCopy.push(randomContact) //adds random pick from original array into spliced arr
        this.setState({ contactsList: contactsCopy })
    }



    deleteContact = id => {
        const contactsCopy = [...this.state.contactsList]
        contactsCopy.splice(id, 1) //exactly one occurrence
        this.setState({ contactsList: contactsCopy }) //always set.State after a modification
    }



    render() {

        return (
            <>
                <button onClick={this.addRandom}>Add random contact</button>
                {this.state.contactsList.map(elm => <ContactsCard key={elm.id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} removeContact={this.deleteContact} />)}

            </>
        )
    }
}



export default ContactsList