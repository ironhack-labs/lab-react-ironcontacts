import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import contactsList from "../../contacts.json";
//import contactsList from './data'

class ContactsList extends React.Component {
    state = {
        contacts: contactsList.slice(0, 5)
    }

    displayContacts = () => {
        //const arrayCopy = [ ...this.state.contacts ];
        //this.setState({contacts: arrayCopy.slice(0, 5)});
        return 
    }

    addContact = () => {
        let randomContact = contactsList[Math.floor(Math.random()*contactsList.length)];
        console.log(randomContact)

        const arrayCopy = [ ...this.state.contacts];
        arrayCopy.push(randomContact);

        console.log(arrayCopy)

        this.setState({contacts: arrayCopy})
    }


    
    render(){
        return (
            <div className="contacts-container">
            <h1>IronContacts</h1>
            <button onClick={() => this.addContact()}>Add Contact</button>
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