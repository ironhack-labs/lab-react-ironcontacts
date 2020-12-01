import React, { Component } from 'react'
import contactsList from '../../contacts.json'
import ContactCard from './ContactCard'

import './ContactList.css'

class ContactList extends Component {

    constructor() {
        super()
        this.state = {
            contactsList: contactsList.slice(0, 5)
        }
    }


    //Add Contact Random
    addRandomContact = () => {
        const randomContact = Math.floor(Math.random() * contactsList.length)
        this.state.contactsList.push(contactsList[randomContact])


         this.setState({
            contactsList: this.state.contactsList
        })

    }


    //Sort by Name
    sortByName = () => {
        this.setState({
            contactsList: this.state.contactsList.sort(function(a, b){
               return a.name.localeCompare(b.name);
                        })
                    })

    }


    //Sort by Popularity
    sortByPopularity = () => {
        this.setState({
            contactsList: this.state.contactsList.sort(function(a, b){
               return b.popularity - a.popularity;
                        })
                    })

    }
    
    
    //Delete Contact
    removeContact = contactIdToDelete => {
        this.setState({
            contactsList: this.state.contactsList.filter(elm => elm.id !== contactIdToDelete)
        })
    }


    render() {


        return (
            <section className="ironContacts">
                <div className="btn">
                <button onClick={this.addRandomContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
                    </div>
              <table className="card">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>

                </tr>

        </thead>
        <tbody>
                {this.state.contactsList.map(elm => <ContactCard key={elm.id} deleteContact={() => this.removeContact(elm.id)} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} />)}
                </tbody>
                </table>
                </section>
        )
    }
}

export default ContactList 
