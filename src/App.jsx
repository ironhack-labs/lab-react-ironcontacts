import React from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const initialContacts = contacts.slice(0,5);
  const [contactList, setContactList] = React.useState(initialContacts);

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(contact => contactList.indexOf(contact) === -1);
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const newContactList = contactList.slice(); 
    newContactList.push(remainingContacts[randomIndex]); 
    setContactList(newContactList);
};

const sortByName = () => {
    const sortedContacts = contactList.slice(); 
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name)); 
    setContactList(sortedContacts);
};

const sortByPopularity = () => {
    const sortedContacts = contactList.slice(); 
    sortedContacts.sort((a, b) => b.popularity - a.popularity); 
    setContactList(sortedContacts);
};


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                <button 
                 className="btn-delete" 
                  onClick={() => {
                    const contactsCopy = contactList.slice();
                       const contactIndex = contactsCopy.findIndex((el) => el.id === contact.id);
                        contactsCopy.splice(contactIndex, 1);
                            setContactList(contactsCopy);
  }}
>
  Delete
</button>

                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
