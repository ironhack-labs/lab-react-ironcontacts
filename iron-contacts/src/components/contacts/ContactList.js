import React, { Component } from 'react'
import contacts from './../../contacts.json'

import './ContactList.css'

import ContactTable from './ContactTable'


class ContactList extends Component {
    
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5)
      
        }
    }

    //Add Contact 
    addNewContact = () => {

        const stateCopy = [...this.state.contacts]

        const randomActor = contacts[Math.floor(Math.random() * contacts.length)]
    
        stateCopy.push(randomActor)
    
        this.setState({
            contacts: stateCopy
        })
    }

    //Sort By Name
    sortByName = () => {
        const sortName = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
        
        this.setState({
            sortName
        })
    }

    //Sort By Popularity
    sortByPopularity = () => {
        const sortPopularity = this.state.contacts.sort((a, b) => b.popularity - a.popularity)
        
        this.setState({
            sortPopularity
        })
    }

    //Delete Contact
    removeContact = contactIdToDelete => {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id != contactIdToDelete)
        })
    }

    render() {
        

        return (
            <section className="list-table">
                
                <h1>IronContacts</h1>

                <button className="btn" onClick={this.addNewContact}>Add Contact</button>

                <button className="btn" onClick={this.sortByName}>Sort by Name</button>

                <button className="btn" onClick={this.sortByPopularity}>Sort by Popularity</button>

                <hr></hr>
                
                <table className="table">
                    <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    
                    {this.state.contacts.map(elm => <ContactTable key={elm.id} deleteContact={() => this.removeContact(elm.id)} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} />)}
                </table>

            </section>
        )
    }

}

export default ContactList