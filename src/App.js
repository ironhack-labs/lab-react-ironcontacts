import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5));
  console.log(contactsArr)
  const [sortOrder, setSortOrder] = useState("order");
  const [sortPopularity, setSortPopularity] = useState ("popularity")

///////// add random name
  const addRandomContact = () => {
    const usedIds = contactsArr.map((contact) => contact.id);
    const otherContacts = contacts.filter(
      (contact) => !usedIds.includes(contact.id)
    );
    const randomIndex = Math.floor(Math.random() * otherContacts.length);
    const randomContact = otherContacts[randomIndex];
    setContactsArr([...contactsArr, randomContact]);
  };
///////////////sort by namme
  const sortByName = () => {
    const sortedContacts = contactsArr.sort((a, b) => {
      if (sortOrder === "order") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setContactsArr([...sortedContacts]);
    setSortOrder(sortOrder === "order" ? "desc":"order");
  };
///////////sort by popularity
  const sortByPopularity=() =>{

    const sortedContacts = contactsArr.sort((a, b)=>{ 

      if (sortPopularity=== "popularity"){
        return b.popularity - a.popularity

      } else{
        return a.popularity - b.popularity
      }
    })
    setContactsArr([...sortedContacts])
   setSortPopularity(sortPopularity==="popularity" ? "desc":"popularity")
  }

  const deleteContact=(contactId)=>{

    const newList=contactsArr.filter(object=> object.id !== contactId)
    setContactsArr(newList)
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th className="Title" colSpan="2">IronContacts</th>
          </tr>
          <button onClick={addRandomContact}>Add Contact </button>
          <button onClick={sortByName}>Sort by Name</button>
          <button onClick={sortByPopularity}>Sort by Popularity</button>
          
          <tr>
            <th>Picture</th>
            <th>Name </th>
            <th>Popularity  </th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions </th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  className="App-logo"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonEmmy === false && <td> 🏆</td>}
              {contact.wonOscar === true && <td> 🏆</td>}
              <td><button onClick={ () => {deleteContact(contact.id)} }>Delete</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
