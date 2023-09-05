import { useState } from 'react';
import ContactsJSON from '../../contacts.json';
import ContactItem from './contactItem';

const INITIAL_CONTACTS = ContactsJSON.splice(0, 5);
const SORT_BY_OPTIONS = ['Name', 'Popularity']

function ContactsList () {
    const [contacts, setContacts] = useState(INITIAL_CONTACTS)
    const [sortBy, setSortBy] = useState(null)

    // Delete
    const onDeleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);

        setContacts(newContacts);
    }

    //Add random
    const addRandomContact = () => {
        if (ContactsJSON.length === 0) {
            return alert('There are no more contacts')
        }

        const randomIndex = Math.floor(Math.random() * ContactsJSON.length);

        const newContact = ContactsJSON.splice(randomIndex, 1)[0];

        setContacts([...contacts, newContact])
    }

    // Sort Contacts
    const renderContactItems = () => {
        let contactsCopy = [...contacts]

        if (SORT_BY_OPTIONS.includes(sortBy)) {
            if (sortBy === 'Name') {
                contactsCopy = contactsCopy.sort((a, b) => {
                   return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                })
            }
        }

        if (sortBy === 'Popularity') {
            contactsCopy = contactsCopy.sort((a, b) => b.popularity - a.popularity)
        }

        return contactsCopy.map(contact => (
            <ContactItem key={contact.id} {...contact} onDelete={() => onDeleteContact(contact.id)}/>
        ))
    }

    const handleSortByButton = (value) => {
        if(sortBy === value) {
            setSortBy(null)
        } else {
            setSortBy(value)
        }
    }

    return (
        <>
            <div className='mt-3 mb-3 d-flex'>
                <button className="btn btn-primary me-2" onClick={addRandomContact}>
                    Add random contact
                </button>
                {SORT_BY_OPTIONS.map((option, i) => (
                  <button
                    key={i} type="button"
                    className={`btn btn-primary me-2 ${sortBy === option ? 'active' : ''}`}
                    onClick={() => handleSortByButton(option)}>
                    {option}
                  </button>
                ))}
            </div>

            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Won Oscar</th>
                        <th scope="col">Won Emmy</th>
                    </tr>
                </thead>
                <tbody>
                    {renderContactItems()}
                </tbody>
            </table>
        </>
    )
}

export default ContactsList;