import { useState } from 'react';
import contacts from '../../contacts.json'
import ContactItem from './ContactItem';

const CONTACT_LIST = contacts.splice(0, 5);

function ContactList() {

    const [contacts, setContacts] = useState(CONTACT_LIST)

    return (
        <div className='flex'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won an Oscar</th>
                        <th>Won an Emy</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <ContactItem key={contact.id} {...contact} />
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default ContactList