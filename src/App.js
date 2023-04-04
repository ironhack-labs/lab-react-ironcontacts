import contactsFromJson from "./contacts.json";
import './App.css';
import { useState } from "react";



function App() {


  const [contacts, setContacts] = useState(contactsFromJson.slice(0, 5));

  //Iteraion 3: can t think of a way to get the random contact and add it to the list.
  const [otherContacts, setOtherContacts ] = useState(contactsFromJson.slice(0, 5));

  const addRandomContact = () => {
    const randomContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];
  }


  //Iteration 4:
    const sortByName = () =>{
    const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
    b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  }


  // Iteration 5
  const deleteContact = (contactId) => {
    const newContacts = contacts.filter( (contactDetails) => {
      if(contactDetails.id !== contactId){
        return true;
      } else {
        return false;
      }
    });
    setContacts(newContacts);
  }


  return (
    <div className="App">
    <h1>IronContacts</h1>
    
    <button className="top-btns" onClick={addRandomContact} >Add Random Contact</button>

    <button className="top-btns" onClick={sortByName}>Sort by name</button>
    <button className="top-btns" onClick={sortByPopularity}>Sort by popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {contacts.map((contact) => {
          return(
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? "🏆" : ""} </td>
            <td>{contact.wonEmmy ? "🏆": ""}</td>
            <button onClick = { () => {deleteContact(contact.id)}}>Delete</button>
          </tr>
          )
         })}
          
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
