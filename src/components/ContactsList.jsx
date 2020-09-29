import React from 'react'
import contactsDB from '../contacts.json'
import ContactRow from './ContactRow'

class ContactsList extends React.Component {


    constructor() {
        super()
        contactsDB.slice(0, 5).map((contact) => this.state.contactsArray.push(contact))

    }

    state = {
        contactsArray: []
    }

    addRadomContact = () => {
        const newRandomContact = contactsDB[Math.floor(Math.random() * contactsDB.length)]
        this.setState({ contactsArray: [newRandomContact, ...this.state.contactsArray] })
    }

    sortByName = () => {
        const sortedByName = this.state.contactsArray.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        this.setState({ contactsArray: sortedByName })
    }

    sortByPopularity = () => {
        const sortedByPopularity = this.state.contactsArray.sort((a, b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))
        this.setState({ contactsArray: sortedByPopularity })

    }

    deleteContact = (event) => {
        var index = this.state.contactsArray.findIndex(function (o) {
            return o.id === event.target.id;
        })
        if (index !== -1) this.state.contactsArray.splice(index, 1);

        this.setState({ contactsArray: this.state.contactsArray })

    }

    render() {

        return (
            <div className="contact-list">
                <h1 className="mb-4">Iron Contacts</h1>
                <button className="btn btn-primary mr-2" onClick={this.addRadomContact}>Add Random Contact</button>
                <button className="btn btn-primary mr-2" onClick={this.sortByName}>Sort by Name</button>
                <button className="btn btn-primary mr-2" onClick={this.sortByPopularity}>Sort by Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture </th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contactsArray.map((contact) =>
                                <ContactRow
                                    image={contact.pictureUrl}
                                    name={contact.name}
                                    popularity={contact.popularity}
                                    id={contact.id}
                                    delete={this.deleteContact}
                                ></ContactRow>)
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default ContactsList