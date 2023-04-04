import {useState } from "react"
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))
  console.log(contacts);
  const addNewContact = ()=>{
    // get all contacts that are not being displayed currently
    const contactsNotDisplayed = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );
    // create a random number in range of contactsNotDisplayed
    const randomNumber = Math.floor(Math.random() * contactsNotDisplayed.length);
    const newRandomContact = contactsNotDisplayed[randomNumber];
  // add the new random contact
  setContacts([...contacts, newRandomContact]);
  console.log("New contact added: " + newRandomContact.name);    
  }
  return (
  <div className="App">
    <h1>Iron Contacts</h1>
    <button onClick={addNewContact}>Add random contact</button>
    <table>
      <thead>
        <tr>
          <th>Pictures</th>
          <th>Names</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact,id)=>(
          <tr key={id}>
            <td>
              <img 
                src={contact.pictureUrl}
                alt={contact.name}
                style={{width:"50px"}}
              />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? "🏆":""}</td>
            <td>{contact.wonEmmy ? "🏆":""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default App;