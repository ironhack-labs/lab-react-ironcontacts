import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5)); //5

  function getRandomContact() {
    
    //Omar WAY (two ways)

    // One Way:
    // const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    // const randomContact = remainingContacts[randomIndex];
    // setContacts((prevState) => [randomContact, ...prevState]);
    // setRemainingContacts((prevState) =>
    //   prevState.filter((e) => e.id !== randomContact.id)
    // );
    //FILTER Method (not mutating, creating a NEW ARRAY):  
    // If they are not equal, the element is included 
    // in the new array; otherwise, it's filtered out.


    //Another Way:
    // const updateRemaining = [...remainingContacts];
    // let randomNum = Math.floor(Math.random() * remainingContacts.length);
    // let randomContact = updateRemaining.splice(randomNum, 1)[0];
    // const updatedContacts = [...contacts, randomContact];
    // setContacts(updatedContacts);
    // setRemainingContacts(updateRemaining);


    // "let randomContact = updateRemaining.splice(randomNum, 1)[0];""
    // HERE: mutating updateRemaining Array by slicing the chosen random
    // contact (which is pushed to the contacts to show so that
    //the remaining one doesn't have already chosen one)
    
    
    // My WAY :D 
    const remainingContacts = contacts.slice(5);
    console.log(remainingContacts);

    // ADD TO THE CONTACT
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    console.log(randomContact);
    setContactsArr([...contactsArr, randomContact]); //push to the contactsArr
  }

  function sortName() {
    const newNameArr = [...contactsArr];
    newNameArr.sort((a, b) => {
      return a.name.localeCompare(b.name); //return without -> can work?!?!?
    });
    console.log(newNameArr); // new array
    setContactsArr(newNameArr); //update
  }

  function sortPopularity() {
    const newNameArr = [...contactsArr];
    newNameArr.sort((a, b) => {
      return b.popularity - a.popularity; //return without -> can work?!?!?
    });
    console.log(newNameArr); // new array
    setContactsArr(newNameArr); //update
  }

  const deleteButton = (contactId) => {
    const filterContacts = contactsArr.filter((contact) => {
      return contact.id !== contactId; // not =, get the new array (filter)
    });

    setContactsArr(filterContacts); // not deleted one
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="button-top">
        <button onClick={getRandomContact}>Get Random Contact</button>
        <button onClick={sortName}>Sort by Name</button>
        <button onClick={sortPopularity}>Sort by Popularity</button>
      </div>

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
          {contactsArr.map((contact) => {
            return (
              <tr contact={contact} key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width="150"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button onClick={() => deleteButton(contact.id)}>
                    {" "}
                    Delete 🗑️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
