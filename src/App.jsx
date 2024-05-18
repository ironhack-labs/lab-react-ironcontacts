/* import { computeHeadingLevel } from "@testing-library/react"; */
import "./App.css";
import Contacts from './contacts.json'
import { useState } from "react";




function App() {
  
  const [contacts, setContacts] = useState(Contacts.slice(0,5))
  const [remainingContacts, setRemainingContacts] = useState(Contacts.slice(5))
    
  const RandomContact = () => {
    let randomNumber = Math.floor(Math.random() * remainingContacts.length)
    const copyContacts = [remainingContacts[randomNumber],...contacts]
    remainingContacts.splice(randomNumber,1)
    setContacts(copyContacts)
  }


  const sortPopularity = () => {
    const sorted = [...contacts]

    sorted.sort((a, b) =>
    
    b.popularity - a.popularity)

    setContacts(sorted)
  }


  const sortByName = () =>{
    const sorted = [...contacts]
    sorted.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sorted)
  }

  const deleteContact = contacId => {
    // returns every movie that does NOT have this movieId
    const filteredContacts= contacts.filter(contact => contacId !== contact.id);

    setContacts(filteredContacts);
  };






//É PRECISO CRIAR UMA FUNÇÃO FORA DO BOTÃO E DEPOIS INVOCAR A FUNÇÃO NO TAG DO BOTÃO

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={() => RandomContact() }>Add Random Contact</button>
      <button onClick={() => sortPopularity() }>Sort by popularity</button>
      <button onClick={() => sortByName() }>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
      {contacts.map(contact => {
        return (
              <tr key={contact.id}>
              <td >
              <img src={contact.pictureUrl} alt=""/>
              </td>
              <td >{contact.name} </td>
              <td >{contact.popularity}</td>
              <td>
              { contact.wonOscar && `🏆` }
              </td>
              <td>
                {contact.wonEmmy && `🌟`}
              </td>
              <td>
                <button onClick={() => deleteContact(contact.id) } >Delete</button>
              </td>
              </tr>
      )
      })}
      </tbody>
      </table>

    </div>
  );
}

export default App;
