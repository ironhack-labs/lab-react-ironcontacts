import React, {useState} from "react";
import "./App.css";
import contacts from "./contacts.json" 

function App() { 

const firstFiveContacts = contacts.splice(0, 5);
const [contactsToDisplay, setContactsToDisplay] = useState(firstFiveContacts)
  
const addRandomContact = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const newContact = contacts[randomIndex];
  setContactsToDisplay([...contactsToDisplay, newContact]);
};

const sortByName = () => {
  setContactsToDisplay((prevContacts) => {
    return [...prevContacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name){
        return 1;
      } else {
        return 0;
      };
    });
  });
};

const sortByPopularity = () => {
  setContactsToDisplay((prevContacts) => {
    return [...prevContacts].sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity){
        return 1;
      } else {
        return 0;
      };
    });
  });
};

const deleteContact = (contactId) => {

    const newList = contactsToDisplay.filter((element) => {
      return element.id !== contactId;
    })

    setContactsToDisplay(newList)
}

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button className="btn" onClick={addRandomContact}>Add Random Contact</button>
      <button className="btn" onClick={sortByName}>Sort by Name</button>
      <button className="btn" onClick={sortByPopularity}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {contactsToDisplay.map((contact, index) => (
            <tr key={contact.id || index}>
              <td>
                <img className="images" src={contact.pictureUrl} alt="picture" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆':''}</td>
              <td>{contact.wonEmmy ? '🏆':''}</td>
              <td>
                <button onClick={() => {deleteContact(contact.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;