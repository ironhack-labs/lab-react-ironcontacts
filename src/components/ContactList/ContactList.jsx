import { useState } from 'react';
import contactsJSON from '../../contacts.json'
import ContactItem from './ContactItem';

const SORT_BY_OPTIONS = ['Name', 'Popularity'];

const CONTACT_LIST = contactsJSON.splice(0, 5);

function ContactList() {

    const [contacts, setContacts] = useState(CONTACT_LIST);
    const [sortBy, setSortBy] = useState(null);


    const renderContactItem = () => {
        let contactsCopy = [...contacts];

        if (SORT_BY_OPTIONS.includes(sortBy)) {
            if (sortBy === 'Name') {
                contactsCopy = contactsCopy.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
            if (sortBy === 'Popularity') {
                contactsCopy = contactsCopy.sort((a, b) => b.popularity - a.popularity);
            }
        }
        return contactsCopy.map((contact) => (
            <ContactItem key={contact.id} {...contact} onDelete={() => onDeleteContact(contact.id)} />
        ))
    }


    const handleSortByButton = (value) => {
        if (sortBy === value) {
            setSortBy(null)
        } else {
            setSortBy(value)
        }
    }

    const onDeleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);

        setContacts(newContacts)
    }

    const addRandomContact = () => {
        if (contactsJSON.length === 0) {
            return alert('No more contacts to add');
        }

        const randomIndex = Math.floor(Math.random() * contactsJSON.length);
        const newContact = contactsJSON.splice(randomIndex, 1)[0];
        setContacts([...contacts, newContact])
    }


    return (
        <div className='ContactList'>
            {contacts.length > 0
                ? (
                    <>
                        <div className='d-flex flex-nowrap justify-content-center'>
                            <div>
                                <button type="button" className="btn btn-outline-secondary me-3" onClick={addRandomContact}><i className="bi bi-person-plus"></i> Add a random contact</button>
                            </div>

                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-filter-left"></i> Select a filter
                                </button>
                                <ul className="dropdown-menu">
                                    {SORT_BY_OPTIONS.map((option, i) => (
                                        <li key={option + i}><button
                                            key={i}
                                            type="button"
                                            className={`dropdown-item ${sortBy === option ? 'active' : ''}`}
                                            onClick={() => handleSortByButton(option)}>
                                            <i className={`bi ${ option === 'Name' ? 'bi-person' : 'bi-heart'}`}></i> {option}
                                        </button></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <table className='table table-striped mt-5'>
                            <thead>
                                <tr>
                                    <th scope='col'>Picture</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Popularity</th>
                                    <th scope='col'>Won an Oscar</th>
                                    <th scope='col'>Won an Emy</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderContactItem()}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <p>No contacts to display</p>
                )
            }

        </div>
    )

}

export default ContactList;