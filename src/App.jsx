import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";
function App() {
  const firstFiveContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFiveContacts);

  // const remainingContacts = contactsData.filter(
  //   (contact) => !contacts.some((selected) => selected.id === contact.id)
  // );

  const addRandomContact = () =>{
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.some((selected) => selected.id === contact.id)
    );
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);

    setContacts([...contacts, remainingContacts[randomIndex] ])
  }

  const sortByName = () =>{
    const sortedArray =  [...contacts].sort((a, b) => a.name.localeCompare(b.name));

    setContacts(sortedArray)
  }

  const sortByPopularity = () =>{
    let sortedArray = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedArray)
  }

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== id 
    } )
    setContacts(filteredContacts)

  }



  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => addRandomContact()} style={{marginBottom: "35px", marginRight: "15px"}}>Add Random Contact</button>
      <button onClick={() => sortByPopularity()} style={{marginBottom: "35px", marginRight: "15px"}}>Sort by Popularity</button>
      <button onClick={() => sortByName()} style={{marginBottom: "35px", marginRight: "15px"}}>Sort by Name</button>
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
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="picture"
                    
                  />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity)}</td>
                <td>{contact.wonOscar && <h2>🏆</h2>}</td>
                <td>{contact.wonEmmy && <h2>🌟</h2>}</td>
                <td><button onClick={()=> deleteContact(contact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
