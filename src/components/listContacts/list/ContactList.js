import { Component } from 'react'
import dataContacts from '../../../data/contacts.json'
import ItemContact from '../../itemContact/ItemContact'

class ContactList extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.setState({ contacts: dataContacts.slice(0, 5) })
    }

    handleDelete(id) {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((contact) => contact.id !== id)
        }))
    }

    handleRandom() {
        const random = dataContacts.filter(contact => contact.id !== this.state.contacts.id)[Math.floor(Math.random() * dataContacts.length)]
        this.state.contacts.push(random)
        this.setState((prevState) => ({
            contacts: prevState.contacts
        }))
    }

    handleSortName() {
        this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
        this.setState((prevState) => ({
            contacts: prevState.contacts
        }))
    }

    handleSortPopularity() {
        this.state.contacts.sort((a, b) =>  b.popularity - a.popularity)
        this.setState((prevState) => ({
            contacts: prevState.contacts
        }))
    }


    render() {
        const { contacts, random } = this.state
        return (
            <div className="d-flex-column">

                <h1 className="d-flex justify-content-center mt-5">Iron Contacts</h1>

                <div className="d-flex justify-content-end mx-5 mt-5">
                    <button type="button" className="btn btn-warning" onClick={() => this.handleRandom(random)}>Add a Famous!</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.handleSortName()}>Order by name</button>
                    <button type="button" className="btn btn-info" onClick={() => this.handleSortPopularity()}>Order by popularity</button>

                </div>

                <table className="table m-4 containerTable">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {contacts.map((contact) =>
                            <ItemContact  {...contact} key={contact.id} onClickDelete={(id) => this.handleDelete(id)} />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ContactList