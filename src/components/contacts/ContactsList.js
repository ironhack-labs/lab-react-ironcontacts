import React from 'react';
import ContactItem from '../ContactItem/ContactItem'
import contactsList from './data'

class ContactsList extends React.Component {
    state = {
        contacts: contactsList
    }

    displayContacts = () => {
        return contactsList.slice(0, 5).map((contact) => {
            return (
                <ContactItem {...contact} key={contact.id}/>
            )
        })
    }
    render(){
        return (
            <div className="contacts-container">
            <h1>IronContacts</h1>
                <table>
                    <thead>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Popularity</th>
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

export default ContactsList;