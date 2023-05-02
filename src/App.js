import "./App.css";
import { useState } from "react"
import contactsData from "./contacts.json"


function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0,6)) 

  console.log(contacts.pictureUrl)

  const handleClick = () => {
    for (i = 0; i < setContacts.length; i++) {
      if (!contacts[i]) {
        setContacts.push(contacts[i])
      }
    }
  }

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={handleClick}>Add random contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          { contacts.map((contact) => {
            return ( 
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar === true ? "🏆": null}</td>
              </tr>
            )
          })}
        </tbody>
    </table>
    </div>
  )
}
export default App;
