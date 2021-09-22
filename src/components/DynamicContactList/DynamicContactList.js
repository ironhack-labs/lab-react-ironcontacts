import React from "react"
import Button from "../Button/Button";
import ContactList from "../ContactList/ContactList";
import contacts from "./../../contacts.json";
import './DynamicContactList.css'


class DynamicContactList extends React.Component {

    constructor() {
        super()
        this.state = {
            contact: contacts.slice(0, 5),
        }
    }

    componentDidMount = () => {
        contacts.splice(0, 5)
    }

    displayContacts = () => {
        const fiveContact = this.state.contact
        return (
            fiveContact.map((contact) => {
                return <ContactList {...contact} deleteContact={(id) => this.deleteContact(id)} />
            })
        )
    }

    addContact = () => {
        let random = Math.floor(Math.random() * contacts.length)
        const contactCopy = [...this.state.contact]
        contactCopy.push(contacts[random])
        contacts.splice(random, 1)
        this.setState({
            contact: contactCopy
        })
    }

    sortByName = () => {
        const moviesCopy = this.state.contact.map(contacts => contacts)
        this.setState({
            ...this.state,
            contact: moviesCopy.sort((contacts1, contacts2) => contacts1.name.localeCompare(contacts2.name))
        })
    }

    sortByPopularity = () => {
        const moviesCopy = this.state.contact.map(contacts => contacts)
        this.setState({
            ...this.state,
            contact: moviesCopy.sort((contacts1, contacts2) => contacts1.popularity - contacts2.popularity)
        })
    }

    deleteContact = (id) => {
        this.setState({
            ...this.state,
            contact: this.state.contact.filter(contacts => contacts.id !== id)
        })
    }

    render() {
        return (

            <div>
                <h1>IRON CONTACTS</h1>
                <Button className="button" func={this.addContact}>Añadir Contacto</Button>
                <Button func={this.sortByName}>Ordenar por nombre</Button>
                <Button func={this.sortByPopularity}>Ordenar por popularidad</Button>
                <table className="info">
                    <thead >
                        <tr className="intro">
                            <td>PICTURE</td>
                            <td>NAME</td>
                            <td>POPULARITY</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.displayContacts()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DynamicContactList