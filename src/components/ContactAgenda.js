import { Component } from "react"
import contacts from "../contacts.json"
import ContactCard from "./ContactCard"
import './ContactCard.css'


class ContactAgenda extends Component {

    constructor() {
        super()
        this.state = {
            contacts,
            displaycontacts: contacts.slice(0, 5)
        }
    }
    addRandomContact = () => {

        let item = this.state.contacts[Math.floor(Math.random() * this.state.contacts.length)]
        const contactsCopy = [...this.state.displaycontacts]
        contactsCopy.push(item)
        this.setState({
            displaycontacts: contactsCopy
        })
    }

    sortContactByName = () => {
        const contactsCopy = [...this.state.displaycontacts]
        contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            displaycontacts: contactsCopy
        })
    }

    sortContactByPopularity = () => {
        const contactsCopy = [...this.state.displaycontacts]
        contactsCopy.sort((a, b) => b.popularity - a.popularity)
        this.setState({
            displaycontacts: contactsCopy
        })
    }

    deleteContact = contactId => {
        this.setState({
            displaycontacts: this.state.displaycontacts.filter(elm => elm.id !== contactId)
        })
    }

    render() {


        return (
            <>
                <button onClick={() => this.addRandomContact()} >Add Random Contact</button>
                <button onClick={() => this.sortContactByName()} >Sort by name</button>
                <button onClick={() => this.sortContactByPopularity()} >Sort by popularity</button>

                <div className='tableContact'>

                    <table className="contact-card">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {this.state.displaycontacts.map(elm => <ContactCard key={elm.id} {...elm} deleteContact={() => this.deleteContact(elm.id)} />)}

                    </table>

                </div>


            </>
        )
    }
}

export default ContactAgenda
