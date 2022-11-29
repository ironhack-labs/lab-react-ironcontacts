import { useState } from 'react'
import './App.css';
import contacts from "./contacts.json";

function App() {


  const selectedContacts = contacts.splice(0, 5)

  const [contactsData, setContactsData] = useState(selectedContacts)
  const addConctacts = () => {
    const randomContacts = contacts[5]
    const contactsCopy = [...contactsData]
    contactsCopy.unshift(randomContacts)
    setContactsData(contactsCopy)
  }


  return (
    <div className="App">
      <h1> IronContacts </h1>
      <button onClick={addConctacts}>Añadir Contacto</button>

      <table>
        <thead>
          <tr>
            <th> Picture</th>
            <th> Name</th>
            <th> Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
          </tr>
        </thead>
        <tbody>

          {contactsData.map(elm => {
            return (
              <tr>
                <td><img src={elm.pictureUrl}></img></td>
                <td><h3>{elm.name}</h3></td>
                <td> {elm.popularity}</td>
                <td> {elm.wonOscar ? <p>🏆</p> : <p></p>}</td>
                <td> {elm.wonEmmy ? <p>🏆</p> : <p></p>}</td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
