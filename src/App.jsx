import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";



function App() {
  const initialContacts = contactsJSON.slice (0,5)
  const [contacts, setContacts] = useState(initialContacts);
{/* Iteration 3 begin*/}
const [remainingContacts, setRemainingContacts] = useState(
  contactsJSON.slice(5)
); 
  
  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContacts((prevContacts) => [...prevContacts,randomContact ]);

    setRemainingContacts((prevRemainingContacts) => {
      const updatedRemainingContacts = [...prevRemainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1);
      return updatedRemainingContacts;
    });
  }
};
 {/* Iteration 3 end*/} 
  
  return (
    <div className="App">
      <h1>IronContacts</h1>

     {/* Iteration 3 button*/}
      <button onClick= {addRandomContact}>Add Random Contact</button>

      
     


      <table className="table">
        <thead>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        {/* Iteration 2 */}
        <th>Won Oscar</th>
        <th>Won Emmy</th>

        </thead>
          <tbody>
            {contacts.map((contact) => (

            <tr key={contact.ID}>
            <td><img src={contact.pictureUrl} alt={contact.name}></img></td>
            <td>{contact.name}</td>
            <td> {contact.popularity.toFixed (2)}</td>
            {/* Iteration 2 */}
            {contact.wonOscar ? <td>🏆</td> : <td></td>}
            {contact.wonEmmy ? <td>🌟</td> : <td></td>}
            </tr>
          ))}
            
          </tbody>
      </table>


    </div>
  );

}
export default App;
