import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {
    const [contactsToDisplay, setContactsToDisplay] = useState(contactsData.slice(0, 5));
  
    const randomPick = () => {
      const remainingContacts = contactsData.slice(5);
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContactsToDisplay([...contactsToDisplay, randomContact]);
    };   

    const sortByName = () => {
      const sortedContacts = [...contactsToDisplay].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setContactsToDisplay(sortedContacts);
    };
    

    const sortByPopularity = () => {
      const sortedContacts = [...contactsToDisplay].sort((a,b)=>{
        return b.popularity - a.popularity;
      })
      setContactsToDisplay(sortedContacts);
    }

    const deleteContact = (contactId) => {
      const updatedContacts = contactsToDisplay.filter((element) => {
        return element.id !== contactId
      })
      setContactsToDisplay(updatedContacts);
    }

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        <button onClick={() => randomPick()}>Add Random Contact</button>
        <button onClick={()=> sortByName()}>Sort by Name</button>
        <button onClick={()=>sortByPopularity()}>Sort by Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactsToDisplay.map((contact, index) => (
              <tr key={index}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar
                ? <td>🏆</td>
                : <td></td>
                }
                {contact.wonEmmy
                ? <td>🏆</td>
                : <td></td>
                }
                <td><button onClick={()=>deleteContact(contact.id)}>Delete</button></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
