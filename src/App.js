import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json"

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5))

  const addRandomContact = ()=>{
    const randomContact = contactsData[Math.floor(Math.random()* contactsData.length)];

    if(contacts.length === contactsData.length) return console.log("You cannot add more contacts");
    if(contacts.some((contact)=>contact.id === randomContact.id)){
      addRandomContact();
    }else{
      setContacts(contacts=>[...contacts, randomContact]);
    }
  }

  const sortByPopularity = ()=>{
    const sortedContacts = contacts.slice().sort((ele1, ele2)=>{
      return ele2.popularity - ele1.popularity;
    })
    setContacts(sortedContacts);
  }

  const sortByName = ()=>{
    const sortedContacts = contacts.slice().sort((ele1, ele2)=>{
      if(ele1.name < ele2.name) {return -1}
      if(ele1.name > ele2.name) {return 1}
      return 0;
    })
    setContacts(sortedContacts);
  }

  const clickToDelete = (contactId)=>{
    const filteredContacts = contacts.filter((contact)=>{
      return contact.id !== contactId
    })
    setContacts(filteredContacts)
  }

  return (

    <div className="App">
      <h1>IronContacts</h1>
      <nav className="navbar">
        <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </nav>
        
      <table className="styled-table">
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
        {contacts.map((contact)=>{
          return (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt="contact-img"></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
              <td><button className="deleteBtn" onClick={() => clickToDelete(contact.id)}>Delete 🗑</button></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>

  );
}
export default App;