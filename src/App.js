import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json"


let fiveContacts = allContacts.slice(0,5)



function App() {
  
  const [contacts, setContacts] = useState(fiveContacts);
  // console.log(contacts)

  const addRandomContact = () => {
    const randomContact =  allContacts[Math.floor(Math.random()*allContacts.length)];
    console.log(randomContact)
    setContacts((prevList) => {
      const prevListCopy = [...prevList];
      prevListCopy.push(randomContact);
      console.log(prevListCopy);
      return prevListCopy;
    })
    // const remainingContacts = allContacts.slice()
  }
  
  return <div className="App">

    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>

      {contacts.map( (contact) => {
        return (
          <tr key={contact.id}>
              <td> <img src={contact.pictureUrl}/> </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>

              {contact.wonOscar 
              ? <td>🏆</td>
              : <td></td>}

              {contact.wonEmmy 
              ? <td>🏆</td>
              : <td></td>}
          </tr>
        )

      }
      )}

      <button onClick={addRandomContact}>Add random contact</button>

    </table>

  </div>;
}
export default App;
