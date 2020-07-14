import React, { Component } from 'react';
import contacts from '../contacts.json';
import ContactsTable from './contactsTable'

import './contactFile.css'

class ContactFile extends Component {
    constructor(props) {
        super()
        this.state = {
            contactsView: contacts.slice(0, 5),
            contacts,
            

        }
    }
    addContact = () => {
        const contactsCopy = [...this.state.contactsView]
        let index = parseInt(Math.random() * this.state.contacts.length)
        let randomContact = this.state.contacts[index]
        contactsCopy.push(randomContact)
        this.setState({ contactsView: contactsCopy })
    }
    sortName = () => {
        const contactsCopy = [...this.state.contactsView]
        contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({ contactsView: contactsCopy })
    }

    sortPopularity = () => {
        const contactsCopy = [...this.state.contactsView]
        contactsCopy.sort((a, b) => b.popularity - a.popularity)
        this.setState({ contactsView: contactsCopy })
    }

    deleteContact = id => {
        const contactsCopy = [...this.state.contactsView]
        contactsCopy.splice(id, 1)
        this.setState({ contactsView: contactsCopy })
    }

    render() {
        return (
            <section>
                <button onClick={this.addContact}>Agregar contacto aleatorio</button>
                <button onClick={this.sortName}>Ordenar por nombre</button>
                <button onClick={this.sortPopularity}>Ordenadar por popularidad</button>
                <table>
                    <thead>
                        <tr className='tabla'>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactsView.map((elem) => <ContactsTable {...elem} />)}
                        {this.state.contactsView.map((elem, idx) => <ContactsTable removeContact={() => this.deleteContact(idx)} {...elem} key={idx} />)}
                        {/* No entiendo porqué solo se me borra de los ultimos que agregue mas no se puede de los primeros 5 */}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default ContactFile
