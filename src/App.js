
import contactArray from "./contacts.json";
import { useState } from "react";
import './App.css';


function App() {
  const firstFive = contactArray.slice(0,5)
  const [contacts, setContacts] = useState(firstFive)
  

  const contactArrayCopy = contactArray.slice(5)

  const addRandomContacts = () => {
    // const generateUUID = (min, max) => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //   }
    //   return generateUUID();

    // const randomNumber = Math.floor(Math.random() * (contactArray.length-5+1))+5
    const randomNumber = Math.floor(Math.random() * (contactArrayCopy.length))
    const newRandomContact = contactArrayCopy[randomNumber]
    const currentContactList = [...contacts, newRandomContact];
      
    setContacts(currentContactList);
}

const sortByName = () => {
    const contactsArrayCopy = [...contacts]
    const compare = contactsArrayCopy.sort(function (a,b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    
    }
    
    )
    setContacts( compare );
}

const sortByPopularity = () => {
  const contactsArrayCopy = [...contacts]
  const compare = contactsArrayCopy.sort(function (a,b) {
    if (a.popularity < b.popularity) {
      return -1;
    }
    if (a.popularity > b.popularity) {
      return 1;
    }
  
  }
  
  )
  setContacts( compare );
}

// const removeContact = (e) => {

//     console.log("hello", e);

//     const updateContactList = contacts.filter(
//         contact => contact.id !== id
//     )
//     setContacts(updateContactList);
// }

  const removeContact = contactId => {
    const filteredContacts = contacts.filter (contact => {
      return contact.id !== contactId
    }
    );
    setContacts(filteredContacts);
  }


  return (
    <div align="center">
    <h1 align="center">Iron Contacts</h1>
    <button onClick={addRandomContacts} align="center" type="submit" padding='5'>Add Random Contact</button>
    <button onClick={() => sortByName()} align="center" type="submit">Sort by name</button>
    <button onClick={sortByPopularity} align="center" type="submit">Sort by popularity</button>
    {/* <button onClick={(e)=> removeContact(e)} align="center">Delete</button> */}
        <table cellPadding='5' cellSpacing='5' align='center' width='900px'>
        <tr>
            <td align='center' width='50px'>Picture
            </td>
        
            <td align='center' width='50px'>Name
            </td>

            <td align='center' width='50px'>Popularity
            </td>

            <td align='center' width='50px'>Won Oscar
            </td>

            <td align='center' width='50px'>Won Emmy
            </td>

        </tr>
        {contacts.map(contact=>(
            
            <tr>
            <td align='center' width='50px'>
            <img className="img-card" src={contact.pictureUrl} alt="contact_picture"  />
            </td>
        
            <td key={contact.id} align='center' width='50px'>{contact.name}
            </td>

            <td align='center' width='50px'>{contact.popularity}
            </td>

            <td align='center' width='50px'>{contact.wonOscar ? "🏆" : " "}
            </td>

            <td align='center' width='50px'>{contact.wonEmmy ? "🏆" : " "}
            </td>

            <td align='center' width='50px'>
            <button onClick={() => removeContact(contact.id)}>Delete</button>
            </td>
        </tr>
        
        )
               
            
        )}
        </table>
    </div>
    );
}

export default App;
