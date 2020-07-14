import React, { Component } from 'react'
import StaticContacts from './../static-contacts/StaticContacts'
import contacts from './../../contacts.json';
import { contactsList as contactsFromFakeApi } from './../contacts-five/contacts-five'

import 'bulma/css/bulma.css';

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
        listCopy.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        this.setState({ contacts: listCopy })
    }

    sortByPopularity = () => {
        const listCopy = [...this.state.contacts]
        listCopy.sort(function (a, b) {
            return b.popularity - (a.popularity);
        });

        this.setState({ contacts: listCopy })
    }

    deleteContact = id => {
        const listCopy = [...this.state.contacts]
        listCopy.splice(id, 1)
        this.setState({ contacts: listCopy })
    }

    render() {
        return (
            <>
                <h1 className="title is-1">IronContacts</h1>
                <div className="level">
                    <div className="level-left">
                        <button className="item-level button is-primary " onClick={this.getRandomActor}>Add one random contact</button>
                    </div>
                    <div className="level-right buttons has-addons">

                        <button className="item-level button" onClick={this.sortByName}>Sort by name</button>
                        <button className="item-level button" onClick={this.sortByPopularity}>Sort by popularity</button>
                    </div>
                </div>
                <table className="table is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th></th>
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
