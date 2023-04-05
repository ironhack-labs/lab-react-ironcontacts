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

  const sortContactsByPopularity = ()=>{
    // use sort function to sort contacts sorted by popularity
    const sortedByPopularity = [...contacts].sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
  // add the sorted contacts by popularity
  setContacts(sortedByPopularity);
  }

  const sortContactsByName = ()=>{
    // use sort function to get sorted contacts by name
    const sortedByName = [...contacts].sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  // add the sorted contacts by name
  setContacts(sortedByName);
  };

  const deleteThisContact = (Id) => {
    // get all contacts without the one whose id matches the id passed in parameter
    const updatedContacts = contacts.filter( contacts => contacts.id !== Id );
    // add new contacts without the current one
    setContacts(updatedContacts);
  }

  return (
  <div className="App">
    <h1>Iron Contacts</h1>
    <div className='Buttons-Top'>
        <button onClick={addNewContact}>Add random contact</button>
        <button onClick={sortContactsByPopularity}>Sort By Popularity</button>
        <button onClick={sortContactsByName}>Sort By Name</button>
      </div>
    <table>
      <thead>
        <tr>
          <th>Pictures</th>
          <th>Names</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
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
            <td>
              <button class="deleteBtn" onClick={ () => {deleteThisContact(contact.id)} }>
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default App;