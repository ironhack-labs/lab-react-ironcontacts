/* -----------------  Import ----------------- */
import "./App.css";
import { useState } from "react";
import contacts     from "./contacts.json";;



function App() {
  /* ----------  Display 5 Contacts ----------- */
  const fiveContacts           = contacts.slice(0, 5);
  const [contact, setContacts] = useState(fiveContacts); 


  /* ----------- Add random contacts ---------- */
  function addContact() {
    const randomElement  = contacts[Math.floor(Math.random() * contacts.length)];
    const listContacts   = [...contact, randomElement]; // Pass the updated list 
    setContacts(listContacts);
    contacts.splice(randomElement, 1);

  }

  /* --------- Sort contacts by name ------------ */
  function sortName() {
    let sortedContacts = [...contact].sort((a, b) => { //Copy the array! sort() mutates arrays
      return a.name > b.name ? 1: -1; //since we are comparing a string 
                                      //we need to specify the output for the comparison. Otherwise we get NaN
    })  
    setContacts(sortedContacts);       
  }

  /* ------- Sort contacts by popularity -------- */
  function sortPopularity() {
    let sortedContacts = [...contact].sort((a, b) => {
      return a.popularity - b.popularity; 
    }) 
    setContacts(sortedContacts);       
  }

  /* ------------- Remove contacts -------------- */
  function removeContact(contactId) {
    let filteredContacts = [...contact].filter(contact => {
      return contact.id !== contactId;
    })
    return setContacts(filteredContacts);
  } 

  return (
    <div className="App">
      
      <button onClick={addContact}>     Add random contact</button> {/* we are referencing the function, not calling it */}
      <button onClick={sortName}>       Sort by name</button>
      <button onClick={sortPopularity}> Sort by Popularity</button>

      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th><em>Picture</em></th>
            <th><em>Name</em></th>
            <th><em>Popularity</em></th>
            <th><em>Won Oscar</em></th>
            <th><em>Won Emmy</em></th>
            <th><em>Actions</em></th>
          </tr>
        </thead>

        <tbody>
          {contact.map(contact => (
              <tr key={ contact.id }>
                <td><img src={ contact.pictureUrl } alt={ contact.name }/> </td>
                <td>{ contact.name }</td>
                <td>{ contact.popularity }</td>
                <td> <button onClick={ () => removeContact(contact.id) }>Delete</button></td>
                {/* -------------  Conditionally Display Awards Info --------- */}
                {
                  contact.wonOscar && <td> 🏆 </td>
                }
                {
                  contact.wonEmmy && <td> 🏆 </td>
                }
              </tr> 
          ))};
        </tbody>
      </table> 
    </div>
  );
}


export default App;