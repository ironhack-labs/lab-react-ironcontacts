import React, { Component } from 'react'
import contacts from './../contacts.json';
import ContactCard from './ContactCard'
import './ContactList.css'

class ContactList extends Component {
    constructor() {
        super()
        this.state = {
            contactList: [...contacts].splice(0, 5)
        }
    }


    // RANDOM CONTACT
    randomItem = () => {
        let newContact = contacts[Math.floor(Math.random() * contacts.length)]

        let copyContact = [...this.state.contactList]
        copyContact.push(newContact)

        this.setState({
            contactList: copyContact
        })
    }


    // SORT BY NAME 
    sortName = () => {
        this.state.contactList.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            else if (a.name < b.name) {
                return -1
            }
            return 0
        })

        this.setState({
            contactList: this.state.contactList
        })
    }


    // SORT BY POPULARITY
    sortPopular = () => {
        this.state.contactList.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return 1
            }
            else if (a.popularity > b.popularity) {
                return -1
            }
            return 0
        })

        this.setState({
            contactList: this.state.contactList
        })
    }




    // DELETE CONTACT
    removeContact = contactIdToDelete => {
        this.setState({
            contactList: this.state.contactList.filter(elm => elm._id !== contactIdToDelete)
        })
    }




    render() {

        let display = this.state.contactList

        return (

            <div className='info'>
                <h2 className='title'>IronContacts</h2>
                <hr />
                <button className='btn-iterations' onClick={this.randomItem}>Add Random Contact</button>
                <button className='btn-iterations' onClick={this.sortName}>Sort by name</button>
                <button className='btn-iterations' onClick={this.sortPopular}>Sort by popularity</button>
                <hr />
                {display.map(elm => <ContactCard key={elm.id} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity} removeContact={() => this.removeContact(elm._id)} />)}
            </div>

        )
    }
}



export default ContactList