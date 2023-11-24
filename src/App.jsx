import "./App.css";
import {useState} from 'react'
import contactsData from "./contacts.json"

function App() {
    const [contacts, setContacts] = useState(contactsData.slice(0, 5));
    const [remainingContacts, setremainingContacts] = useState(contactsData.slice(5));

    const addRandomContact = () => {
      if (remainingContacts.length > 0) {
        const randomContact = Math.floor(Math.random() * remainingContacts.length)
        const newContacts = remainingContacts[randomContact]

        setContacts((prevContacts) => [...prevContacts, newContacts])
        setremainingContacts ((prevRemainingContacs) => 
        prevRemainingContacs.filter((contact) => contact.id !== newContacts.id))
      }
    }

    const sortByName = () => {
      const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
      setContacts(sortedContacts);
    };
  
    const sortByPopularity = () => {
      const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
      setContacts(sortedContacts);
    };

    const deleteContact = (id) => {
      setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };
  

      return (
    
        <div className="App">
          <h1>IronContacts</h1>
          <button className="button" onClick={addRandomContact}>Add Random Contact</button>
          <button className="button" onClick={sortByName}>Sort by name</button>
          <button className="button" onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th colSpan="2">Won Oscar</th>
            <th colSpan="2">Won Emmy</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img className="contacts-pictures"
                  src={contact.pictureUrl}
                  alt={`picture of ${contact.name}`}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? <img className="trophy-icon" src="/src/assets/trophy-icon.svg" alt="trophy icon" /> : null}</td>
              <td></td>
              <td>{contact.wonEmmy ? <img className="star-icon" src="/src/assets/star-icon.svg" alt="star icon" /> : null}</td>
              <td></td>
              <td> <button onClick={() => handleDeleteContact(contact.id)}>Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
