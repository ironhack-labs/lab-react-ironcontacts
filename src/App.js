import "./App.css";
import Contacts from "./contacts.json";
import AddRandomContact from "./components/AddRandomContact";
import { useState} from 'react';

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(5, 10));

  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  };

  function handleSortName() {
    const sortContactByName = [...contacts].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    
    setContacts(sortContactByName);
  };

  function handleSortPopularity() {
    const sortContactByPopularity = [...contacts].sort((a, b) => {
      return a.popularity < b.popularity ? 1 : -1;
    });
    
    setContacts(sortContactByPopularity);
  };

  return (
    <>
    <div className="App">
            <div><h1>IronContacts 📇</h1></div>
            <div className="button-row">
              <AddRandomContact handleAddRandomContact={setContacts} />
              <button onClick={() => handleSortName()} className="btn-action"><i class="bi bi-person-bounding-box"></i> Sort contact by name</button>
              <button onClick={() => handleSortPopularity()} className="btn-action"><i class="bi bi-star-fill"></i> Sort contact by popularity</button>
            </div>
        <table>
          <tr>
            <td className="Headers">Picture</td>
            <td className="Headers">Name</td>
            <td className="Headers">Popularity</td>
            <td className="Headers">Won Oscar</td>
            <td className="Headers">Won Emmy</td>
            <td className="Headers">Actions</td>
          </tr>

          {contacts.map((contact) => (
            
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} width="60%" alt="" className="img" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p>&#127942;</p> : <p></p>}</td>
                <td>{contact.wonEmmy ? <p>🌟</p> : <p></p>}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)} className="btn-delete"><i class="bi bi-person-dash-fill"></i> Delete contact</button>
                </td>
              </tr>
            
          ))}
        </table>
    </div>
    </>
  );
};

export default App;
