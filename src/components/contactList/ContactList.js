import React, { Component } from 'react'

import contacts from '../../contacts.json'

import ContactCard from '../contactCard/ContactCard'

import './ContactList.css'

class ContactList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }

    addRandom = () => {
        
        const availableContacts = contacts.filter(elm => !(this.state.contacts.includes(elm)))
        const randomIndex = Math.floor(Math.random() * availableContacts.length)
        this.state.contacts.push(availableContacts[randomIndex])
        

        this.setState({
            contacts: this.state.contacts
        })

    }

    sortName = () => {
        this.setState({
            contacts: this.state.contacts.sort(function (a, b) {
                return a.name.localeCompare(b.name)
            })
        })
    }
    

    sortPopularity = () => {
        this.setState({
            contacts: this.state.contacts.sort(function (a, b) {
                return b.popularity - a.popularity
            })
        })
    }


    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== contactId)
        })
    }


    render() {


        return (
            
            <>
                
                <section> 
                    
                <h1>IronContacts</h1>

                <button className="btn" onClick={this.addRandom}>Add a random actor/actress</button>

                <button className="btn" onClick={this.sortName}>Sort by name</button>

                <button className="btn" onClick={this.sortPopularity}>Sort by popularity</button>
                
                <table>

                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Picture</td>
                            <td>Popularity</td>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody>
                        
                            {this.state.contacts.map(elm => <ContactCard key={elm.id} {...elm} removeContact={() => this.removeContact(elm.id)}/>)}
                        
                    </tbody>

                </table>
                    
                </section>

            </>
        )
    }

}



export default ContactList