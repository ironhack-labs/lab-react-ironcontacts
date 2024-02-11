import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"


function App() {

  const [state, setState] = useState({
    contactsData: contacts.slice(0,5), 
    sortAscending: true
  });


  const addRandomContact = () => { 
    const remainingContacts = contacts.filter((contact) => !state.contactsData.includes(contact));
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    setState({
      ...state, 
      contactsData: [...state.contactsData, randomContact]
    });
  }
    

    const sortPopularity = () => {
      const sortedData = [...state.contactsData];
      sortedData.sort((objA, objB) => 
        state.sortAscending 
        ? objA.popularity - objB.popularity 
        : objB.popularity - objA.popularity
          );
        setState ({
          ...state, 
          contactsData: sortedData
        })
      }
    

    const sortName = () => {
      const sortedData = [...state.contactsData];
      sortedData.sort((objA, objB) => 
        state.sortAscending
        ? objA.name.localeCompare(objB.name) 
        : objB.name.localeCompare(objA.name)
      )
        setState({
          contactsData: sortedData, 
          sortAscending: !state.sortAscending
        })
        }
    
    const removeContact = (id) => {
      const updatedContacts = state.contactsData.filter((contact) => contact.id !== id)
      setState({
        ...state,
        contactsData: updatedContacts,
      })
    }



  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
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
        <tbody>{state.contactsData.map((contact) => ( 
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl}/>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar && <p>🏆</p>}</td>
            <td>{contact.wonEmmy && <p> 🌟 </p>}</td>
            <td><button onClick={() => removeContact(contact.id)} >Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
        }

export default App;
