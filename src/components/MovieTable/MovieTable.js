import React, { Component } from 'react'
import StaticContacts from './../static-contacts/StaticContacts'
import contacts from './../../contacts.json';
import { contactsList as contactsFromFakeApi } from './../contacts-five/contacts-five'


class MovieTable extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contactsFromFakeApi,
        }
    }

    getRandomActor = () => {
        const contactsCopy = [...contacts] //TODO quizá no haga falta?
        const randomContact = contactsCopy[Math.floor(Math.random() * contactsCopy.length)]
        const listCopy = [...this.state.contacts]
        listCopy.push(randomContact)
        this.setState({ contacts: listCopy })
    }

    sortByName = () => {
        const listCopy = [...this.state.contacts]
        const newOrder = listCopy.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        this.setState({ contacts: newOrder })
    }

    sortByPopularity = () => {
        const listCopy = [...this.state.contacts]
        const newOrder = listCopy.sort(function (a, b) {
            return b.popularity - (a.popularity);
        });

        this.setState({ contacts: newOrder })
    }

    deleteContact = id => {
        const listCopy = [...this.state.contacts]
        listCopy.splice(id, 1)
        this.setState({ contacts: listCopy })
    }

    render() {
        return (
            <>
                <h1>IronContacts</h1>
                <button onClick={this.getRandomActor}>Randomeeo, randomeea</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((elm) => <StaticContacts {...elm} key={elm.id} removeContact={() => this.deleteContact(elm.id)} />)}

                    </tbody>
                </table>
            </>
        )
    }
}

export default MovieTable
