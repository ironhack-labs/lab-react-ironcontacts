import React, {Component} from 'react'
import contacts from '../contacts.json'
import { TableHead, TableRow } from '../table/Table'
import './ContactList.css'

class ContactsList extends Component {
  constructor() {
    super()
    this.state = {
      contactList: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    }
  }
    
    addRandomContact = () => {
        const newContactList = [...this.state.contactList]
        const idx = Math.floor(Math.random() * (contacts.length - this.state.contactList.length) + this.state.contactList.length);
        newContactList.push(contacts[idx])
        this.setState({ contactList: newContactList })
    }

    sortName = () => {
        const sortedList = this.state.contactList.sort((a, b) => (a.name > b.name) ? 1 : -1)
        this.setState({ contactList: sortedList })
    }
    
    sortPopularity = () => {
        const sortedList = this.state.contactList.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
        this.setState({ contactList: sortedList })
    }

    deleteContact = elmId => this.setState({contactList: this.state.contactList.filter(elm => elm.id != elmId)})
    
  render() {
    return (
        <section>
            <div className="buttons">
                <button onClick={this.addRandomContact}>Add new random contacts</button>
                <button onClick={this.sortName}>Sort by name</button>
                <button onClick={this.sortPopularity}>Sort by popularity</button>
            </div>
            <table>
                <TableHead head1="Picture" head2="Name" head3="Popularity" head4="Action" />
                <tbody>
                    {this.state.contactList.map(elm => <TableRow key={elm.id} deleteContact={() => this.deleteContact(elm.id)} {...elm} />)}
                </tbody>
            </table>
        </section>
    )
  }
}

export default ContactsList