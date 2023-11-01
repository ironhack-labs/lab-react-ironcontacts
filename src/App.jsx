import "./App.css";
import contactsJSON from "./contacts.json"
import { useState } from "react";



  
function App() {
  
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5))  // set the useState value to only the first 5 contacts
  const random = contactsJSON.slice(5)                     // variable with the remaining contacts
  const addRandomContact = () => {                         // function for adding a random contact
    randomIndex = Math.floor(Math.random()*random.length);  // creating random index of the remaining contacts array
    randomToAdd = random[randomIndex];                      // using random index to randomly find a contact
    if(!contacts.includes(randomToAdd)){                    // checking if that contact alreadyexists on the state array
      setContacts(contacts => [...contacts, randomToAdd])   // insert the ne random contact into the state 
    }
  }

  const sortByPopularity = ()=>{
    const byPopularity = [...setContacts];
    byPopularity.sort((a, b) => a.popularity > b.popularity)
    setContacts(byPopularity)
  }

  const sortByName = () =>{
    const byName = [...setContacts];
    byName.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(byName)
  }

  const deleteContact = () => {
    
  }
  

  return (                        // buttons not functioning
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick ={addRandomContact}>Add Random Contact</button>  
      <button onClick ={sortByName}>Sort by Name</button>
      <button onClick ={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) =>{    // map the new useState value and return, inside the table rows, the proper values. Use toFixed to converto to a string And to round to two numbers
            return(
          <tr key={index}> 
            <td><img src={contact.pictureUrl}/></td>
            <td>{contact.name}</td>   
            <td>{contact.popularity.toFixed(2)}</td>  
            <td>{contact.wonOscar? "🏆" : ""}</td>
            <td>{contact.wonEmmy? "🌟" : ""}</td>  
            <td>{}</td>
          </tr>)
          })}
          
        </tbody>
            
      </table>
    </div>
  );
}

export default App;
