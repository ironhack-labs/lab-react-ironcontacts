import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json"; 


function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <ContactList />
    </div>
  );
}

const ContactList = () => {
  // Step 1: Initialize state with an array of 5 contacts
  const [contactList, setContactList] = useState(contacts.slice(0, 6));

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(contact => !contactList.includes(contact));
    if (remainingContacts.length > 0) {
      const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setContactList([...contactList, randomContact]);
    }
  };

   // Handler for sorting by name
   const sortByName = () => {
    const sortedByName = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedByName);
  };

  // Handler for sorting by popularity
  const sortByPopularity = () => {
    const sortedByPopularity = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedByPopularity);
  };
 // Handler for deleting a contact
 const deleteContact = (id) => {
  const updatedContacts = contactList.filter(contact => contact.id !== id);
  setContactList(updatedContacts);
};
  

  return (
    <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contactList.map((contact, index) => (
          <tr key={index}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} width="50" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🌟' : ''}</td>
            <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default App;
