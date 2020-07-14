import React, {Component} from 'react'

import './Contact-list.css'

import contactsFromDB from './contacts.json'
import ContactElm from './Contact-elm'

class ContactsList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contactsFromDB.slice(0, 5)
        }
    }

    addRandom = () => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.push(contactsFromDB[Math.floor(Math.random() * contactsFromDB.length)])
        this.setState({contacts: contactsCopy})
    }

    sortByName = () => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({contacts: contactsCopy})
    }

    sortByPopularity = () => {
        const contactsCopy = [...this.state.contacts]
        contactsCopy.sort((a, b) => a.popularity - b.popularity).reverse()
        this.setState({contacts: contactsCopy})
    }

    removeContact = id => {
        const contactsFiltered = this.state.contacts.filter(elm => elm.id !== id)
        this.setState({contacts: contactsFiltered})
    }

    render() {
        return (
            <>
                <h1 className='title'>IronContacts</h1>
                <div>
                    <button onClick={this.addRandom}>Add a random contact</button>
                    <button onClick={this.sortByName}>Sort by Name</button>
                    <button onClick={this.sortByPopularity}>Sort by Popularity</button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map(elm => <ContactElm {...elm} delContact={() => this.removeContact(elm.id)} key={elm.id}/>)}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ContactsList