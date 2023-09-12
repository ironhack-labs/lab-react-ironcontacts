import { useState } from "react";
import "./App.css";
import contactsFile from './contacts.json'


function App() {

  const [contacts, setContacts] = useState(contactsFile.slice(0, 5));
  
  const deleteContact = (contactId) => {

    const newList = contacts.filter((element) => {
        return contactId !== element.id
    })

    setContacts(newList);

}

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <ul>
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
          {contacts.map((element) => (
            <tr key={element.id}>
              <td>
                <img
                  src={element.pictureUrl}
                  alt={element.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{element.name}</td>
              <td>{element.popularity}</td>
              <td>{element.wonOscar && <p>🏆</p>}</td>
              <td>{element.wonEmmy && <p>🏆</p>}</td>
              <button onClick={() => deleteContact(element.id)}>Delete</button>
            </tr>
          ))}
          </tbody>
        </table>
      </ul>
      
    </div>
  );
}

export default App;
