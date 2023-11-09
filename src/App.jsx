import "./App.css";
import { useState } from 'react';
import contacts from './contacts.json'

function App() {
  
  const [contacts, setContacts] = useState(contacts)

  const newArray = contacts.splice(0, 5)
  const addContact = () => {
    const newContact = Math.floor(Math.random() * contacts.length)

    const contactsCopy = [...contacts]
    contactsCopy.unshift(newContact)
    setContacts()
    console.log(newContact)
  }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}> add contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>won Oscar</th>
            <th>won Emmy</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td><img src={newArray[0].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{newArray[0].name}</td>
            <td>{newArray[0].popularity}</td>
            <td>{
              newArray[0].wonOscar ? <p>🏆</p> : <p></p>
            }</td>
            <td>{
              newArray[0].wonEmmy ? <p>🏆</p> : <p></p>
            }</td>
          </tr>

          <tr>
            <td><img src={newArray[1].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{newArray[1].name}</td>
            <td>{newArray[1].popularity}</td>
            <td>
              {
                newArray[1].wonOscar ? <p>🏆</p> : <p></p>
              }
            </td>
            <td>{
              newArray[1].wonEmmy ? <p>🏆</p> : <p></p>
            }</td>
          </tr>

          <tr>
            <td><img src={newArray[2].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{newArray[2].name}</td>
            <td>{newArray[2].popularity}</td>
            <td>
              {
                newArray[2].wonOscar ? <p>🏆</p> : <p></p>
              }
            </td>
            <td>{
              newArray[2].wonEmmy ? <p>🏆</p> : <p></p>
            }</td>
          </tr>

          <tr>
            <td><img src={newArray[3].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{newArray[3].name}</td>
            <td>{newArray[3].popularity}</td>
            <td>
              {
                newArray[3].wonOscar ? <p>🏆</p> : <p></p>
              }
            </td>
            <td>{

              newArray[3].wonEmmy ? <p>🏆</p> : <p></p>

            }</td>
          </tr>

          <tr>
            <td><img src={newArray[4].pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
            <td>{newArray[4].name}</td>
            <td>{newArray[4].popularity}</td>
            <td>
              {
                newArray[4].wonOscar ? <p>🏆</p> : <p></p>
              }
            </td>
            <td>{
              newArray[4].wonEmmy ? <p>🏆</p> : <p></p>
            }</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default App;
