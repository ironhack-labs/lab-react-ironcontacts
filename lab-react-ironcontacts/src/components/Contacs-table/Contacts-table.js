import React, { Component } from 'react'

// Custom Components
import ContactRowTable from './Contact-row-table'

// Data
import contactsData from '../contacts.json'

// Styles
import './css/Movies-table.css'

class ContactsTable extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contactsData.filter((element, index) => index < 5)
        }
    }

    addRandomContact = () => {

        const availableContacts = contactsData.filter(element => !this.state.contacts.includes(element))

        if (availableContacts.length === 0) {
            alert('No hay mas contactos para añadir')
        } else {
            
            // Add new contact
            const maxValue = availableContacts.length
            const randomValue = Math.floor(Math.random() * Math.floor(maxValue))
    
            const newContacts = [...this.state.contacts]
            
            newContacts.push(availableContacts[randomValue])
    
            this.setState({
                contacts: newContacts
            })

        }
        
    }

    sortByName = () => {
        
        const sortedContacts = [...this.state.contacts]

        sortedContacts.sort((a, b) => a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()))

        this.setState({
            contacts: sortedContacts
        })

    }

    sortByPopularity = () => {
        
        const sortedContacts = [...this.state.contacts]

        sortedContacts.sort((a, b) => b.popularity - a.popularity)

        this.setState({
            contacts: sortedContacts
        })

    }

    removeContact = contactID => {
        
        this.setState({
            contacts: this.state.contacts.filter(element => element.id != contactID)
        })

    }

    render() {
        
        return (

            <>
                <article>
                    <button onClick={this.addRandomContact}>Add Random Contact</button>
                    <button onClick={this.sortByName}>Sort by name</button>
                    <button onClick={this.sortByPopularity}>Sort by popularity</button>
                </article>
                
                <table>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        {this.state.contacts.map(element => <ContactRowTable key={element.id} {...element} removeContact={() => this.removeContact(element.id)} />)}
                    </tbody>
                </table>

            </>
        )

    }

}

export default ContactsTable