import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import contactsList from "../../contacts.json";
//import contactsList from './data'

class ContactsList extends React.Component {
    state = {
        contacts: contactsList.slice(0, 5)
    }

    addContact = () => {
        let randomContact = contactsList[Math.floor(Math.random()*contactsList.length)];

        const arrayCopy = [ ...this.state.contacts];
        arrayCopy.push(randomContact);

        this.setState({contacts: arrayCopy})
    }

    sortContactsByName = () => {
        const arrayCopy = [ ...this.state.contacts];
        this.setState({contacts: arrayCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))})
    }

    sortContactsByPopularity = () => {
        const arrayCopy = [ ...this.state.contacts];
        this.setState({contacts: arrayCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity)})
    }


    
    render(){
        return (
            <div className="contacts-container">
            <h1>IronContacts</h1>
            <button onClick={() => this.addContact()}>Add Random Contact</button>
            <button onClick={() => this.sortContactsByName()}>Sort by name</button>
            <button onClick={() => this.sortContactsByPopularity()}>Sort by popularity</button>
                <table>
                    <thead>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map((contact) => {
                                return (
                                    <ContactItem {...contact} key={contact.id}/>
                                    )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )

    }
}

export default ContactsList;