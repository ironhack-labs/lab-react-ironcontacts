import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import contactsData from "../../contacts.json"

class ContactList extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.setState({ contacts: contactsData.slice(0, 5) })
    }

    /*     handleRandomContact() {
    const randomContact = this.props.contacts[Math.floor(Math.random()* this.props.contacts.length)]
        }
     */

    handleRandomContact() {
        const { contacts } = this.state;
        const restOfContacts = contactsData.filter(({ id }) => !contacts.some(contact => contact.id === id))
        //const restOfContacts = contactsData.filter(myContact => !contacts.some(contact => contact.id === myContact.id))

        if (restOfContacts.length > 0) {
            const randomContact = restOfContacts[Math.floor(Math.random() * restOfContacts.length)]
            this.setState(({ contacts }) => ({ contacts: [...contacts, randomContact] }))
        }
    }

    handleDelete(id) {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((contact) => contact.id !== id)
        }))
    }

    handleSortByName() {
        this.state.contacts.sort((a,b) => a.name.localeCompare(b.name))
        this.setState((prev) => ({
            contacts: prev.contacts
        }))
    }

    handleSortByPopularity() {
        this.state.contacts.sort((a,b) => a.popularity.toFixed(2).localeCompare(b.popularity))
        this.setState((prev) => ({
            contacts: prev.contacts
        }))
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                <button type="button" class="btn btn-secondary" onClick={() => this.handleRandomContact()}>Add Random Contact</button>
                <button type="button" class="btn btn-secondary m-2" onClick={() => this.handleSortByName()}>Sort By Name</button>
                <button type="button" class="btn btn-secondary" onClick={() => this.handleSortByPopularity()}>Sort By Popularity</button>

                <div className="table table-borderless">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <ContactItem key={contact.id} {...contact} onClickDelete={(id) => this.handleDelete(id)} />
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }

}
export default ContactList
