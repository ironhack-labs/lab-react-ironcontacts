import React, { Component } from 'react'
import contactsInfo from './../contacts.json'
import ContactCard from './Contact-card'
import './Contacts-list.css'

class ContactsList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contactsInfo.filter((elm, index) => index < 5)
        }
    }

    addRandomContact = () => {

        let availableContacts = contactsInfo.filter(elm => !this.state.contacts.includes(elm))

        let randomIndex = Math.floor(Math.random() * availableContacts.length)
        let randomContact = availableContacts[randomIndex]
        let newContacts = [...this.state.contacts]
        
        // if (!newContacts.includes(randomContact)) {
        //    newContacts.push(randomContact)
        // }

        newContacts.push(randomContact)

        this.setState({ contacts: newContacts })
         
    }

    sortByName = () => {

        const contactsToSort = [...this.state.contacts] 
        const sortedContacts = contactsToSort.sort((a, b) => a.name.localeCompare(b.name))

        this.setState({contacts: sortedContacts })
    }

    sortByPopularity = () => {

        const contactsToSort = [...this.state.contacts]
        const sortedContacts = contactsToSort.sort((a, b) => b.popularity - a.popularity)

        this.setState({contacts: sortedContacts })
    }

    deleteContactFromList = contactId => {
        this.setState ({ contacts: this.state.contacts.filter(elm => elm.id != contactId)})
    }

    render() {

        return (

            <>
                <h1>IronContacts</h1>
                <div className='buttons'>
                    <button onClick={this.addRandomContact}>Add Random Contact</button>
                    <button onClick={this.sortByName}>Sort by name</button>
                    <button onClick={this.sortByPopularity}>Sort by popularity</button>
                </div>
                <table className='contact-card'>
                    <tbody>
                        <tr className='title'>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        {this.state.contacts.map(elm => <ContactCard key={elm.id} {...elm} deleteContact={() => this.deleteContactFromList(elm.id)} />)}
                    </tbody>
                </table>
                
            </>
        )
    }
}








export default ContactsList