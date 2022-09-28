import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  

  function getRandomContact(contactList) {
    const randomIndex = Math.floor(Math.random() * contactList.length)
    return contactList.splice(randomIndex, 1)[0]
  }
  // console.log(contacts)
  return (
    <div className="App">
    <h1>IronContacts</h1>
     <button onClick={()=> {
        setContacts([...contacts, getRandomContact(contactList)])
      }}>Add Random Contact</button>
      <table >
        <thead>
          <tr>
            <th><b>Picture</b></th>
            <th><b>Name</b></th>
            <th><b>Popularity</b></th>
            <th><b>Won an Oscar</b></th>
            <th><b>Won an Emmy</b></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            {/* console.log(contact) */}
            return (      
              <tr key={index}>
                <td><img style={{width: "80px"}} src={contact.pictureUrl}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar 
                  ? "🏆"
                  : null
                }</td>
                <td>{contact.wonEmmy 
                  ? "🏆"
                  : null
                }</td>
              </tr>
            );
         })}
        </tbody>
      </table>
      {/* {console.log(contacts)} */}
    </div>
  );
}

export default App;
