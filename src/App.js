import { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [contactsToShow, setContactsToShow] = useState(contacts.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

  const addRandomContactHandler = () => {
    const remainingCopy = [...remainingContacts];
    const randomIndex = Math.floor(Math.random() * remainingCopy.length);
    const randomItem = remainingCopy[randomIndex];
    setContactsToShow([...contactsToShow, randomItem]);
    remainingCopy.splice(randomIndex, 1)
    setRemainingContacts(remainingCopy);
  }

  const sortByName = () => {
    setContactsToShow([...contactsToShow].sort((a, b) => (a.name > b.name) ? 1 : -1));
  }

  const sortByPop = () => {
    setContactsToShow([...contactsToShow].sort((a, b) => (a.popularity < b.popularity) ? 1 : -1));
  }

  const deleteContact = (contactId) => {
    const contactsCopy = [...contactsToShow];
    const index = contactsCopy.findIndex(contact => contact.id === contactId);
    contactsCopy.splice(index, 1)
    setContactsToShow(contactsCopy);
  }

  return (
    <div className="App mb-5">
      <header className="App-header">
        <h1>IronContacts</h1>
      </header>
      <div className="col-12 col-lg-6 mx-auto">
        <button className='btn btn-success my-4 mx-2' onClick={() => addRandomContactHandler()}>Add random contact</button>
        <button className='btn btn-outline-primary my-4 mx-2' onClick={() => sortByName()}>Sort alphabetically</button>
        <button className='btn btn-outline-primary my-4 mx-2' onClick={() => sortByPop()}>Sort by popularity</button>
        <table className='table table-striped my-4 mx-auto'>
          <thead>
            <tr>
                <th scope='col'>Picture</th>
                <th scope='col'>Name</th>
                <th scope='col'>Popularity</th>
                <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {
              contactsToShow.map(contactItem => {
                return (
                  <tr key={contactItem.id}>
                    <td className='img-container align-middle'>
                      <img src={contactItem.pictureUrl} alt={contactItem.name}/>
                    </td>
                    <td className='align-middle'>
                      {contactItem.name}
                    </td>
                    <td className='align-middle'>
                      {contactItem.popularity}
                    </td>
                    <td className='align-middle'>
                      <button className='btn btn-danger' onClick={() => deleteContact(contactItem.id)}>Delete contact</button>
                    </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;