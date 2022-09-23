import Contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));

  const randomContacts = () =>{
    const random = Math.floor(Math.random() * (Contacts.length - 5)) + 5;
    const newArray = [...contacts, Contacts[random]]
    setContacts(newArray)
  }

  const sortPopularity = () =>{
    const newArray =[...contacts]
    const sortArray= newArray.sort((a, b) => b.popularity - a.popularity)
    setContacts(sortArray)
  }
  const sortName = () =>{
    const newArray =[...contacts]
    const sortArray= newArray.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sortArray)
  }

  const deleteContact = (index) =>{
    const newArray =[...contacts]
    newArray.splice(index, 1)
    setContacts(newArray)
  }
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={()=>randomContacts()}>Add random contact</button>
        <button onClick={()=>sortPopularity()}>Sort by popularity</button>
        <button onClick={()=>sortName()}>Sort by name</button>
      </div>
      <br />
      <center>
        <table className="tableContent">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>

          </tr>
          {contacts.map((contact, index) => {
            return (
              <tr>
                <td>
                  <img width={60} src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar === true && <img width={30} src="https://cdn-icons-png.flaticon.com/512/1366/1366509.png" alt=""/>}</td>
                <td>{contact.wonEmmy === true && <img width={30} src="https://cdn-icons-png.flaticon.com/512/1366/1366509.png" alt=""/>}</td>
                <button onClick={()=> deleteContact(index)}>Remove</button>
              </tr>
            );
          })}
        </table>
      </center>
    </div>
  );
}

export default App;
