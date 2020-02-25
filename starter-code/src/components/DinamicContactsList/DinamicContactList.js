import React, { Component } from 'react'
import Card from '../cards/Card'
import AllContacts from '../../contacts.json'


class DinamicContactsList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: AllContacts.splice(0, 5)
        }
    }

    deleteContact = idx => {
        const contactsNew = [...this.state.contacts]
        contactsNew.splice(idx, 1)
        this.setState({ contacts: contactsNew })
    }

    pushRandom = () => {
        const contactsNew = [...this.state.contacts]
        let randomNumber = Math.floor(Math.random() * (AllContacts.length + 1))
        contactsNew.push(AllContacts[randomNumber])
        this.setState({ contacts: contactsNew })
    }
    sort = () => {
        const contactsNew = [...this.state.contacts]
        contactsNew.sort((a, b) => a.name > b.name ? 1 : -1)
        this.setState({ contacts: contactsNew })
    }
    sortPopularity = () => {
        const contactsNew = [...this.state.contacts]
        contactsNew.sort((a, b) => b.popularity - a.popularity)
        this.setState({ contacts: contactsNew })
    }

    render() {
        return (
            <>
                <button onClick={this.pushRandom}>Add Random</button>
                <button onClick={this.sort} >Sort By Name</button>
                <button onClick={this.sortPopularity} >Sort By Popularity</button>

                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((elm, idx) => <Card key={elm.id} {...elm} deleteContact={() => this.deleteContact(idx)} />)}
                    </tbody>
                </table>
            </>
        )
    }
}

export default DinamicContactsList