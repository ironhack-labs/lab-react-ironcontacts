import './App.css';
import {useState} from "react";
import contactsData from "./contacts.json";

function App() {
  const contactsCopy = [...contactsData];
  const fiveContacts = contactsCopy.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);
  
  const addRandomContact = (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * contactsCopy.length);
    const newContact = contactsCopy.splice(randomIndex, 1)
    const updatedContacts = [...contacts, ...newContact]
    setContacts(updatedContacts)
    console.log(updatedContacts)
  }
  
    return (
      <div className="App">
      <h1>Iron Contacts</h1>
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
    {fiveContacts.map(contact =>
      <tr>
        <th><img src={contact.pictureUrl} alt="contact-pic" className={'contactPicture'}/></th>
        <th>{contact.name}</th>
        <th>{contact.popularity.toFixed(2)}</th>
        <th>{contact.wonOscar &&  "🏆"}</th>
        <th>{contact.wonEmmy &&  "🏆"}</th>
        
      </tr>
    )}
      </tbody>
      </table>
      <button onClick={addRandomContact}>Add a random contact</button>
    </div>
    )
}

export default App;


