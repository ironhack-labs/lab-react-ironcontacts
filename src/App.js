import { useState } from 'react';
import './App.css';
import contactsArray from './contacts.json';

function App() {
  const fiveContacts = contactsArray.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);
  const listContacts = contacts.map(contact => {
    const roundedPopularity = Math.round(contact.popularity *100)/100;
    return (
      <tr>
        <td>
          <img 
          src={contact.pictureUrl} 
          alt="Contact profile"
         className="contact-img" 
         width={100} height={100} 
         />
        </td>
        <td>{contact.name}</td>
        <td>{roundedPopularity}</td>
        {contact.wonOscar ? <td>🏆</td> : <td></td>}
        {contact.wonEmmy ? <td>🏆</td> : <td></td>}
      </tr>
    )
  } )
  function addRandomContact() {
    let randomContact = contactsArray[Math.floor(Math.random() * contactsArray.length)];
    let founded = contacts.find(element => element.id === randomContact.id);
    if (founded === undefined) {
    setContacts(prevState => {
      let prevList = [prevState];
      return prevList.push(randomContact)
    } )
  }else {
    addRandomContact();
  }
  }
   
    return (
      <div className="App">
        <div className="header">
          <h1>IronContacts</h1>
          <button onClick={() => addRandomContact()}>Add Random Contact</button>
        </div>
        <table className="contacts-table">
          <tbody>
            <tr>
              <td>
                <strong>Picture</strong>
              </td>
              <td>
                <strong>Name</strong>
              </td>
              <td>
                <strong>Popularity</strong>
              </td>
              <td>
                <strong>Won <br/>Oscar</strong>
              </td>
              <td>
                <strong>Won <br/>Emmy</strong>
              </td>
            </tr>
            {listContacts}
          </tbody>
        </table>
      </div>
    )
  }
 


export default App;
