import React, { Component } from 'react'
import contacts from '../contacts.json'
import Card from './CardImp'

class DinamicList extends Component {
    constructor() {
        super()
        this.state = {
            firstContacts: contacts.slice(0, 5)
        }

    }

    pickRandomContacts = () => {
        let random = Math.floor(Math.random() * contacts.length)
        let copyFirstContacts = [...this.state.firstContacts]
        if (!copyFirstContacts.includes(contacts[random])) {
            copyFirstContacts.push(contacts[random])
        }
        this.setState({
            firstContacts: copyFirstContacts
        })

        console.log(copyFirstContacts)
    }

    sortByName = () => {
        let sortContact = [...this.state.firstContacts].sort((a, b) => (a.name > b.name) ? 1 : -1)

        this.setState({
            firstContacts: sortContact
        })
    }

    sortByPopulate = () => {
        let sortContact = [...this.state.firstContacts].sort((a, b) => b.popularity - a.popularity)

        this.setState({
            firstContacts: sortContact
        })

    }

    deleteContacts = idx => {
        const copyContact = [...this.state.firstContacts]
        copyContact.splice(idx, 1)
        this.setState({
            firstContacts: copyContact
        })
    }



    render() {

        console.log(this.state.firstContacts)
        return (
            <div>
                <h2>
                    IronContact
                    </h2>
                <div className='table'>
                    <ul>
                        <li>
                            Picture
                        </li>
                        <li>
                            Name
                        </li>
                        <li>
                            Popularity
                        </li>
                        <li>
                            Action
                        </li>
                    </ul>
                </div>
                <button onClick={() => this.pickRandomContacts()}>
                    Add New Random Contacts
                </button>
                <button onClick={() => this.sortByName()}>
                    Sort by name
                </button>
                <button onClick={() => this.sortByPopulate()}>
                    Sort by popularity
                </button>
                <ul className='famous-list'>
                    {
                        this.state.firstContacts.map((contact, idx) => <Card key={idx} {...contact} removeContact={() => this.deleteContacts(idx)} />)
                    }
                </ul>
            </div>
        )

    }

}




export default DinamicList