import React, { Component } from 'react'
import contacts from '../contacts.json';

const copyContacts = JSON.parse(JSON.stringify(contacts))
const newContacts = copyContacts.slice(0,5)

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: newContacts
        }
    }

    deleteContact(id) {
        const contactIndex = newContacts.findIndex(item => item.id === id)
        newContacts.splice(contactIndex, 1)
        this.setState({
            contacts: newContacts
        })
    }

    contactList() {
        return this.state.contacts.map(contact => {
            return (
                <tr key={contact.id}>
                    <th><img className="contact-img" src={contact.pictureUrl} alt="Contact" /></th>
                    <th>{contact.name}</th>
                    <th>{contact.popularity}</th>
                    <th>
                        <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
                    </th>
                </tr>
            )
        })
    }

    addRandom(array) {
        const randomElement = array[Math.floor(Math.random() * array.length)]
        if (newContacts.indexOf(randomElement) === -1) {
            newContacts.push(randomElement)
            this.setState({
                contacts: newContacts
            })
        } else {
            console.log("Already exists !")
        }  
    }

    sortByName(array) {
        const sortedArray = newContacts.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            contacts: sortedArray
        })
    }

    sortByPopularity(array) {
        const sortedArray = newContacts.sort((a, b) =>  (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
        this.setState({
            contacts: sortedArray
        })
    }

    render() {
        return (
            <div className="main">
                <button onClick={() => this.addRandom(copyContacts)}>
                    Add random contact
                </button>
                <button onClick={() => this.sortByName(copyContacts)}>
                    Sort by name
                </button>
                <button onClick={() => this.sortByPopularity(copyContacts)}>
                    Sort by popularity
                </button>
                <table className="table">
                    <tbody>
                        <tr className="first-row">
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        {this.contactList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table