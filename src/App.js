import contacts from './contacts.json';
import Contact from './components/contact/Contact';
import { useState } from 'react';

import './App.css';

function App() {
  const dataContact = contacts.filter((contact, index) => index < 5);

  const [contactsData, setContactsData] = useState(dataContact);

  const handleContact = () => {
    const pending = contacts.filter(c => !contactsData.includes(c));
    const random  = pending[Math.floor(Math.random() * pending.length)]
    if (random) {
      setContactsData([random, ...contactsData])
    }
  }

  const handleSortByPopularity = () => {
    setContactsData([...contactsData.sort((a, b) => a.popularity - b.popularity)])
  }

  const handleSortByName = () => {
    setContactsData([...contactsData.sort((a, b) => a.name - b.name)])
  }

  const handleDelete = (contact) => {
    setContactsData(contactsData.filter(c => c.id !== contact.id ))
  }

  return (
    <div className="app d-flex justify-content-center align-items-center flex-column text-center">
      <h2>IronContacts</h2>
      <div className="d-flex mb-3">
        <button className="btn btn-primary mx-1" onClick={handleContact}>Add new Contact</button>
        <button className="btn btn-primary mx-1" onClick={handleSortByPopularity}>Sort by popularity</button>
        <button className="btn btn-primary mx-1" onClick={handleSortByName}>Sort by name</button>
      </div>
      <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactsData.map(contact => <Contact key={contact.id} contact={contact} onDelete={() => handleDelete(contact)}/>)}
          </tbody>
      </table>
    </div>
  );
}

export default App;
