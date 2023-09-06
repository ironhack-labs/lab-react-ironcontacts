import { useState } from 'react';
import contactsJSON from '../../contacts.json';
import ContactItem from './ContactItem';
import Button from '../Button/Button';

const SORT_BY_OPTIONS = ['Name', 'Popularity'];

const INITIAL_CONTACTS = contactsJSON.splice(0, 5);

const ContactsList = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [sortBy, setSortBy] = useState(null);

  const renderContactsItems = () => {
    let contactsCopy = [...contacts];

    if (SORT_BY_OPTIONS.includes(sortBy)) {
      if (sortBy === 'Name') {
        contactsCopy = contactsCopy.sort((a, b) => {
          const NameA = a.name.toLowerCase(); 
          const NameB = b.name.toLowerCase();
      
          if (NameA < NameB) {
            return -1;
          }
          if (NameA > NameB) {
            return 1;
          }
          return 0;
        });
      }
      if (sortBy === 'Popularity') {
        contactsCopy = contactsCopy.sort((a, b) => b.popularity - a.popularity);
      }
    }

    return contactsCopy.map(contact => (
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
    setContacts(newContacts);
  };

  const addRandomContact = () => {
    if (contactsJSON.length === 0) {
      return alert('There are no more contacts');
    }

    const randomIndex = Math.floor(Math.random() * contactsJSON.length);
    const newContact = contactsJSON.splice(randomIndex, 1)[0]; 
    setContacts([...contacts, newContact])
  }

  return (
    <div className="ContactsList">
      { contacts.length > 0
        ? (
          <>
            <div className="flex">
              <div className="btn-group me-3" role="group" aria-label="Basic example">
                {SORT_BY_OPTIONS.map((option) => (
                  // <button
                  //   key={i} type="button"
                  //   className={`btn btn-primary ${sortBy === option ? 'active' : ''}`}
                  //   onClick={() => handleSortByButton(option)}
                  // >
                  //   {option}
                  // </button>
                  <Button key={option} extraClassName={sortBy === option ? 'active' : ''} onClick={() => handleSortByButton(option)}>
                    {option}
                  </Button>
                ))}
              </div>

              <Button onClick={addRandomContact}>
                Add random contact
              </Button>
            </div>

            <table className="table table-hover mt-3">
              <thead>
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">Name</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Won Oscar</th>
                  <th scope="col">Won Emmy</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderContactsItems()}
              </tbody>
            </table>
          </>
        ) : (
          <p>There are no Contacts to display</p>
        )
      }

    </div>
  )
}

export default ContactsList;
