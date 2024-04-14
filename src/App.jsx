import React, {useState} from "react";
import "./App.css";
import contactsData from "./contacts.json";


function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5)); 

    const handleAddRandomContact = () => {
      const newContact = contactsData[Math.floor(Math.random() * contactsData.length)];
      setContacts(prevContacts => [...prevContacts, newContact])
    }
  
    const handleSortByName = () => {
      const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
      setContacts(sortedContacts);
    };

    const handleSortByPopularity = () => {
      const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
      setContacts(sortedContacts);
    };

    const handleDeleteContact = (id) => {
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      
      <button className='btn' onClick={handleAddRandomContact}>Add random contact</button>
      <button className='btn' onClick={handleSortByPopularity}>Sort by popularity</button>
      <button className='btn' onClick={handleSortByName}>Sort by name</button>
      
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>

        {contacts.map(contact => (
          <tr key={contact.id}>
            <td><img src={contact.pictureUrl} /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🌟' : ''}</td>
            <td><button className='btn' onClick={() => handleDeleteContact(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
