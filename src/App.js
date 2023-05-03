import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react"

function App() {
const [contactList, setContactList] = useState(contacts.slice(0,5));
/*console.log(contacts)*/

function addRandomContact () {
  //create a new arrey with the rest of the elements
  const restOfArray = contacts.slice(5)

  console.log(restOfArray)
// Variable with random element, that we take from the rest of the array
  let ranIndex = Math.floor(Math.random() * restOfArray.length)

  //this random contact, that will be added from the rest of the Array
  let newContact = restOfArray[ranIndex]

  //we take the existing arrey (thats why the ... - makes the copy and we just add the new random contact to the copied array)
  let newArray = [...contactList, newContact]
  setContactList(newArray)
}

function sortByPopularity () {
  const sortedByPopularity = contacts.sort((a, b) => {
    if (a.popularity < b.popularity) {
      return 1;
    } else {
      return -1;
    }
  });

  setContactList(sortedByPopularity);
}

function sortByName () {
  const sortedByName = contacts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });

  setContactList(sortedByName);
}

// id - represents the id, that we want to delete. We filter all the contacts and the function returns
// all the id's, that are not equal to this id, that we want to delete
function deleteContact(id) {
  const contactsAfterDelete = contacts.filter((contact) => {
    return contact.id !== id;
  });

  setContactList(contactsAfterDelete);
}

  return (
  <div className="App">
  <h1>IronContacts</h1>
  <div className="buttons">
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByPopularity}>Sort By Popularity</button>
    <button onClick={sortByName}>Sort By Name</button>
  </div>

    <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🏆" : null}</td>
              <td><button onClick={()=> {deleteContact(contact.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  
  )
}
export default App;
