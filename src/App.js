import contacts from './contacts.json';
import './App.css';
import { useState } from 'react';


function App() {

  
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5));


  const addRandomContact = () => {

    const randIndex = Math.floor(Math.random() * remainingContacts.length);
    const remainingContactsCopy = [...remainingContacts];

    const contactToAdd = remainingContactsCopy.splice(0, 1)[0];
    const updatedContactsArr = contactsArr.slice(0);
    updatedContactsArr.push(contactToAdd);

    setRemainingContacts(remainingContactsCopy);
    setContactsArr(updatedContactsArr);
 
  };


  const sortByName = () => {
    const arrToSort = contactsArr.slice(0);

    arrToSort.sort((contact, nextContact) => {
      if(contact.name.toUpperCase() > nextContact.name.toUpperCase()) {
        return 1;
      } else if(contact.name.toUpperCase() < nextContact.name.toUpperCase()) {
        return -1;
      } else {
        return 0;
      }
    });

    setContactsArr(arrToSort);
 
  };


  const sortByPopularity = () => {
    const arrToSort = contactsArr.slice(0);

    arrToSort.sort((contact, nextContact) => {
      if(contact.popularity > nextContact.popularity) {
        return -1;
      } else if(contact.popularity < nextContact.popularity) {
        return 1;
      } else {
        return 0;
      }
    });

    setContactsArr(arrToSort);
  };

  const deleteContact = (contactToDelete) => {

    const contactIndex = contactsArr.indexOf(contactToDelete);

    const remainingContactsCopy = [...remainingContacts];

    const updatedArr = [...contactsArr];
    const deletedContact = updatedArr.splice(contactIndex, 1);
    remainingContactsCopy.push(deletedContact);

    setRemainingContacts(remainingContactsCopy);
    setContactsArr(updatedArr);

  }


  return (
    <div className="App">
      <table>

        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>
          {contactsArr.map((contact) => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} className="contact-picture" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "✅" : "❌"}</td>
                <td>{contact.wonEmmy ? "✅" : "❌"}</td>
                <td><button onClick={() => deleteContact(contact)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>

      </table>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>

    </div>
  );
}

export default App;
