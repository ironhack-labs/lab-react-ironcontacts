import "./App.css";
import contactsData from './contacts.json'
import { useState } from 'react';

function App() {
  const fivePeople = contactsData.slice(0,5);
  const [contactsToDisplay, setContacts] = useState(fivePeople);
  
  const addRandomContact =() => {
    const remainingActors = contactsData.slice(5);
    const randomActorIndex = Math.floor(Math.random() * remainingActors.length);
    const randomActor = remainingActors[randomActorIndex];
    setContacts((prevState)=>[randomActor, ...prevState]);
    }

  const sortByPopularity = () => {
  const byPopularity = [...contactsData].sort((a,b) => b.popularity - a.popularity)
  setContacts(byPopularity);
  }

  const sortByName = () => {
    const byName = [...contactsData].sort((a,b) => a.name.localeCompare(b.name))
    setContacts(byName);
  }

  const deleteContact = (contactId) => {
    const updatedContacts = contactsToDisplay.filter(contact => {
      return contact.id !== contactId;
    })
    setContacts(updatedContacts);
  }



  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact </button>
      <button onClick={sortByPopularity}>Sort by popularity </button>
      <button onClick={sortByName}>Sort by name </button>


      <div class="contactTable">
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
              {contactsToDisplay.map((contacts, index)=> (
                <tr key = {index}>
                <td><img src ={contacts.pictureUrl} /></td> 
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
                <td>{contacts.wonOscar && <p>🏆</p>}</td>
                <td>{contacts.wonEmmy && <p>🏆</p>}</td>
                <td><button onClick={() => deleteContact(contacts.id)} 
                  className="btn-delete">Delete</button></td>
              </tr>
              ))}
            </tbody>
          </table>
          </div>

    </div>
  );
}

export default App;
