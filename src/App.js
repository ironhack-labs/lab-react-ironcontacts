import { useState } from "react"
import contactsJSON from './contacts.json';
import './App.css';

function App() {
  const allContacts = contactsJSON.slice()
  const contactsData = allContacts.slice(0,5)
  const [contacts, setContacts] = useState(contactsData);
  
  function addRandomContact() {
    let randomIndex = Math.floor(Math.random()*allContacts.length);
    let randomContact = allContacts[randomIndex];
    setContacts([randomContact, ...contacts])
    allContacts.splice(randomIndex, 1)
  }

  function sortName() {
    let sortedContacts = contacts.slice().sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedContacts)
  }

  function sortPopularity() {
    let sortedContacts = contacts.slice().sort(function(a, b){
      return b.popularity-a.popularity;
  })
  setContacts(sortedContacts)
  }

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter(contact => {
        return contact.id !== id
    })
    setContacts(filteredContacts)
  }
  

  return (
    <div className="App">
      <div class="container text-center">
        <h1>IronContacts</h1>
        <button type="button" class="btn btn-outline-dark" onClick={addRandomContact}>Add Contact</button>
          <table class="table table-borderless align-middle">
            <thead>
              <tr>
                <th scope="col"><h3>Picture</h3></th>
                <th scope="col">
                  <h3>Name
                    <i type="button" class="bi bi-sort-alpha-down" onClick={sortName}></i>
                  </h3>
                </th>
                <th scope="col">
                  <h3>Popularity
                    <i type="button" class="bi bi-sort-numeric-down-alt" onClick={sortPopularity}></i>
                  </h3>
                </th>
                <th scope="col"><h3>Won Oscar</h3></th>
                <th scope="col"><h3>Won Emmy</h3></th>
                <th scope="col"><h3>Actions</h3></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} style={{ height:10+ "em"}} alt="contact picture"/></td>
                  <td>{contact.name}</td>
                  <td>{Math.round(contact.popularity * 100) / 100}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy ? "🏆" : ""}</td>
                  <td>
                    <button type="button" class="btn btn-sm btn-outline-dark" onClick={() => deleteContact(contact.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;
