import './App.css';
import { useState } from "react";
import contactsFromJson from './contacts.json';

function App() {

  const [contacts, setContacts] = useState(contactsFromJson.slice(0,5));
  const [restOfContacts, setRestOfContacts] = useState(contactsFromJson.slice(5))

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * restOfContacts.length);

    const randomContact = restOfContacts[randomIndex];
    const remainingContacts = restOfContacts.filter((contact, index) => index !== randomIndex);
  
    setContacts([...contacts, randomContact]);
    setRestOfContacts(remainingContacts);
  }

  return (
    <div className="App"> 
    <h1>Ironcontacts!!</h1>

    <button onClick = {addRandomContact}>Add Random Contact!</button>

    <hr/>
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
        </tr>
      </thead>
      <tbody>

      {contacts.map( contactObj => {
        return(
          <tr>
          <td>{contactObj.pictureUrl
                ? <img src={contactObj.pictureUrl} alt={contactObj.name} /> 
                : <img src="https://dummyimage.com/182x268/aaaaaa/000000" />}
          </td>
          <td>{contactObj.name}</td>
          <td>{contactObj.popularity}</td>
          <td>{contactObj.wonOscar ? '🏆' : ' '}</td>
          <td>{contactObj.wonEmmy ? '🏆' : ' '}</td>
          </tr>
        )
      })}


      </tbody>
    </table>
    </div>
  );
}

export default App;
