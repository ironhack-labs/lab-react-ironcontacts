import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsToDisplay, setContactsToDisplay] = useState(contacts);
  const newContactsArr = contactsToDisplay.slice(0, 5);

  const deleteContact = (contactid) => {
    const newList = contactsToDisplay.filter((contact) => {
        return contactid !== contact.id
    })
    setContactsToDisplay(newList)
}

  return (
    <div>

      <h1>IronContacts</h1>
      
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {newContactsArr.map((contact) => (
          <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt={contact.name} /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td> {contact.wonOscar ? '🏆' : ''} </td>
            <td> {contact.wonEmmy ? '🏆' : ''} </td>
            <button onClick={() => { deleteContact(contact.id) }}>Delete</button>
          </tr>
        ))}
      </table>

    </div>
  );
}

export default App;
