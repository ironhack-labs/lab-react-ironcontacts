import { useState } from 'react';
import ContactsJSON from '../../contacts.json';
import ContactItem from './contactItem';

const INITIAL_CONTACTS = ContactsJSON.splice(0, 5);

function ContactsList () {

    const [contacts, setContacts] = useState(INITIAL_CONTACTS)

    return (
        <>
         <table className="table table-hover mt-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                </tr>
            </thead>
            <tbody>
                { contacts.map(contact => (
                    <ContactItem key={contact.id} {...contact} />
                ))}
            </tbody>
        </table>
        </>
    )
}

export default ContactsList;