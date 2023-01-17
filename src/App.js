import "./App.css";
import contacts from "./contacts.json"
import { useState } from "react";

function App() {
  const contactsArr = contacts.slice(0, 5);
  // console.log (contactsArr);

  const [contactsExsistArr, setContacts] = useState(contactsArr);  

  const contactsRestArr = contacts.slice(5, (contacts.length+1));
  //console.log(contactsRestArr); 
  

  const addNewContacts = () => { 
    let indexInContactsRestArr = Math.floor(Math.random()*contactsRestArr.length)-1; 
    let newContact = contactsRestArr.splice(indexInContactsRestArr, 1) 
    // console.log(newContact)    
    setContacts([...contactsExsistArr, newContact[0]])
  } 
  // console.log(contactsExsistArr)

  //Sort Contacts by Name and Popularity
  const sortByPopularity = () => {
    let copy = [...contactsExsistArr]
    setContacts(() => {
      copy.sort((a, b) => {
        const popularityA = a.popularity
        const popularityB = b.popularity        
        return popularityB - popularityA;
      })
      return copy;
    });
  }


  const sortByName = () => {
    let copy = [...contactsExsistArr]
    setContacts(() => {
      copy.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      })
      return copy;
    });
  }

  //Remove Contacts
  const deletContact = (idOfTheContactToDelete) =>{
    const newListOfContacts = contactsExsistArr.filter((contact) =>{
      return contact.id !== idOfTheContactToDelete;
    });
    setContacts(newListOfContacts)
  }


  return (
  <div className="App">
      <h1>IronContacts</h1>
        <button onClick={addNewContacts} >Add Random Contact</button>
        <button onClick={sortByPopularity} >Sort by popularity</button>
        <button onClick={sortByName} >Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactsExsistArr.map((contact) => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt="" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{(contact.wonOscar) ? "🏆" : null}</td>
                <td>{(contact.wonEmmy) ? "🏆" : null}</td>
                <td><button onClick={() => deletContact(contact.id)}>Delete this Contact</button></td>
              </tr>

            )
          })}
        </tbody>
      </table>
       
        
   
  </div>
  );
}
export default App;