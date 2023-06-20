import './App.css';
import contactsData from './contacts.json';
import { useState } from "react";

function App() {

  const [contactsToDisplay, setContactsToDisplay] = useState(contactsData)

  let fiveContacts = contactsData.slice(0,5)
  

  const deleteContact = (contactId) => {
   
    // contactsToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

    const newList = contactsToDisplay.filter( (element) => {
        return element.id !== contactId;
    });

    setContactsToDisplay(newList);
  }

  return (
    <div className="App">

    {fiveContacts.map((contactsObj) => {
      return(
        <div className="contactsdetails">
          <table>
              <th>Picture</th> 
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Delete Contact</th>
            <tbody>
              <td className="Photos"><img src={contactsObj.pictureUrl} alt="picture"/></td>
              <td>{contactsObj.name}</td>
              <td>{contactsObj.popularity}</td>
              
              <td>{ contactsObj.wonOscar === true 
                ? "🏆"
                : "Maybe next year 😉"}</td>

              <td>{ contactsObj.wonEmmy === true 
                ? "🏆"
                : "Maybe next year 😉"}</td>

              <td>
                <button onClick={ () => {deleteContact(contactsObj.id)}}>Delete this contact</button>
              </td>

            
            </tbody>
          </table>
        </div>
      )
    })}
    </div>
  );
}


export default App;
