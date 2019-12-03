import React from 'react';
import ContactRow from './ContactRow';
import shortid from 'shortid';



const ContactsTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Contacts</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.contactsArr.map(contactObj => {
                        return (
                            <ContactRow key={shortid.generate()} contact={contactObj} />           
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ContactsTable;