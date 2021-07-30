import { Component } from 'react';
import Contact from '../contacts/Contact'
import contactsData from '../../data/contacts.json';

class ContactList extends Component {

    state = {
        contacts: []  
    }

    componentDidMount() {
        this.setState({ contacts: contactsData.slice(0, 5) })
    }

    handleRandomContact() {
        const {contacts} = this.state;
        const restOfContacts = contactsData.filter( ({ id }) => !contacts.some(contact => contact.id === id))
        if (restOfContacts.length > 0) { 
            const random = restOfContacts[Math.floor(Math.random() * restOfContacts.length)]
            this.setState(({contacts}) => ({ contacts: [...contacts, random]}))
    }
}

    handleSortByName() {
        this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
        this.setState((prevState) => ({ contacts: prevState.contacts}))
    }

    handleSortByPopular() {
        this.state.contacts.sort((a, b) => b.popularity - a.popularity)
        this.setState((prevState) => ({ contacts: prevState.contacts}))
    }


    handleDelete(id) {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((contact) => contact.id !== id)
        }))
    }

    render() {
        const { contacts } = this.state;

        return (

        <div className="container text-center">
            <button type="button" className="btn btn-light" onClick={() => this.handleSortByName()}>Sort by Name</button>
            <button type="button" className="btn btn-light" onClick={() => this.handleSortByPopular()}>Sort by Popularity</button>
            <button type="button" className="btn btn-secondary" onClick={() => this.handleRandomContact()}>Add Random Contact</button>
            
            <table className="table table-hover mt-5">
                <thead>
                    <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Delete</th>

                    </tr>
                </thead>
                
                <tbody className="container-fluid">
                    {contacts.map((contact) => 
                    <Contact {...contact} key={contact.id} onClickDelete={(id) => this.handleDelete(id)}/>
                    )}
                </tbody>
            </table>
            </div>
        )
    }
}


export default ContactList