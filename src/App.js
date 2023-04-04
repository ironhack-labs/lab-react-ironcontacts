import {useState } from "react"
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))
  console.log(contacts);
  return (
  <div className="App">
    <h1>Iron Contacts</h1>
    <table>
      <thead>
        <tr>
          <th>Pictures</th>
          <th>Names</th>
          <th>Popularity</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default App;