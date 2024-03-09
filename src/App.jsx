import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";



function App() {
  const initialContacts = contactsJSON.slice (0,5)
  const [contacts, setContacts] = useState(initialContacts);
  // const [showContact, setShowContact] = useState(true);
// Iteration 3 begin
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
 // Iteration 3 end 

 //Iteration 4 begin sort function
 const handleSortPopularity = () => {

  const copyContactList = [ ...contacts];
  
  copyContactList.sort( (contact1, contact2) => contact1.popularity > contact2.popularity ? -1 : 1);
  setContacts(copyContactList);

}

const handlesortName = () => {
  const copyContactList = [ ...contacts];
  copyContactList.sort( (contact1, contact2) => contact1.name > contact2.name ? 1 : -1)
  setContacts(copyContactList);

}
//Iteration 4 end sort function


//Iteration 5 begin-delete function
    const deleteContact = (contactId) =>{
      const filteredContacts = contacts.filter(contact =>{
        return contact.id !== contactId;
      });
      setContacts(filteredContacts);
      //  Iteration 5 end-delete function
    }
    


  
  return (
    <div className="App">
      <h1>IronContacts</h1>

    {/* Iteration 3 button*/}
      <button onClick= {addRandomContact}>Add Random Contact</button>
      <button onClick= {handleSortPopularity}>Sort by popularity</button>
      <button onClick= {handlesortName}>Sort by name</button>

      
     


      <table className="table">
        <thead>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        {/* Iteration 2 */}
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th>Actions</th>

        </thead>
          <tbody>
            {contacts.map((contact) => (

            <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt={contact.name}></img></td>
            <td>{contact.name}</td>
            <td> {contact.popularity.toFixed (2)}</td>
            {/* Iteration 2 */}
            {contact.wonOscar ? <td>🏆</td> : <td></td>}
            {contact.wonEmmy ? <td>🌟</td> : <td></td>}
            {/* Iteration 5 delete button*/}
            <td>
              <button onClick={() => deleteContact(contact.id)} className="btn-delete">Delete</button>
            </td>
            </tr>
          ))}
            
          </tbody>
      </table>


    </div>
  );

}
export default App;
