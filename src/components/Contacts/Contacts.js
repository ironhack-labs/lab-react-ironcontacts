import { useState } from "react";
import contacts from "../../contacts.json";
import './Contacts.css'

function Contacts() {
  const [contactsArr, setContacts] = useState(contacts.slice(0, 5));

  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];
    setContacts([...contactsArr, randomContact]);
  }

  const sortByPopularity = () => {
    const sortedContactsByPopular = [...contactsArr].sort((a, b)=> {
      return b.popularity - a.popularity;
    })
    setContacts(sortedContactsByPopular)
  }

  const sortByName = () => {
    const sortedContactsByName = [...contactsArr].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContactsByName);
  }
  
  const deleteContact = contactId => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h2>Contacts</h2>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

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
          {contactsArr.map((contact) => (
            <tr key={contact.id} className="contactCard">
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: "100px" }}/></td>
              <td><p>{contact.name}</p></td>
              <td><p>{contact.popularity}</p></td>
              <td>{contact.wonOscar ? <p>🏆</p> : null}</td>
              <td>{contact.wonEmmy ? <p>🌟</p> : null}</td>
              <td><button onClick={() => deleteContact(contact.id)} className="btn-delete">
              Delete
            </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;

