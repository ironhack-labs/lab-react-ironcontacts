import { useState } from "react";
import "./App.css";
import contactsFromJson from "./contacts.json";
function App() {
  //console.log(contactsFromJson);
  const firstFive = contactsFromJson.slice(0, 5);
  const [listOfContacts, setListOfContacts] = useState(firstFive);
  //console.log(firstFive);

  const addContact = () => {
    const newList = contactsFromJson.filter((contact) => {
      return !listOfContacts.includes(contact);
    });
    const item = newList[Math.floor(Math.random() * newList.length)];

    const newContact = [...listOfContacts];
    newContact.push(item);

  setListOfContacts(newContact);


    
  };
  ///////////////// Sort by Name ///////////////////////

  const sortByName = () => {
    const copyOfContacts = [...listOfContacts];
    copyOfContacts.sort((a, b) => a.name.localeCompare(b.name));
    setListOfContacts(copyOfContacts);
  };

  ////////////////// SOrt by pop /////////////////////////////
  const sortByPop = () => {
    const copyPop = [...listOfContacts];
    copyPop.sort((a, b) => b.popularity - a.popularity);
    setListOfContacts(copyPop);
  };
  /////////////// Delete Contact /////////////////////////////

  const deleteContact = (id) => {
    const newListOfContacts = listOfContacts.filter((contact) => {
      return contact.id !== id;
    });
    setListOfContacts(newListOfContacts);
  };
  let titleMessage;
  if (listOfContacts.length > 0) {
    titleMessage = <h2> The current number of Contacts :{listOfContacts.length}</h2>;
  } else {
    titleMessage = <h2> Sorry!!! no Contacts </h2>;
  }



  return (
    <div className="App">
    <h1>Contacts :</h1>
    {titleMessage}
    <h2> The total number of Contacts :{contactsFromJson.length}</h2>;

    {listOfContacts.length === contactsFromJson.length && <h3> Sorry, cannot add any more !!</h3>}
    
  
      <div className="Navbar">
        
      {listOfContacts.length !== contactsFromJson.length &&  <button onClick={addContact}>Add Random Contact</button> }
       
         
       
     
          <button onClick={sortByName}>Sort By Name</button>
     
      
          <button onClick={sortByPop}>Sort By Popularity</button>
        
      </div>
<div className="container">
      <table className="Contact-table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy </th>
          <th>Actions </th>

        </tr>

        {listOfContacts.map((contactDetails) => {
          return (
            <tr>
              <td>
                <img src={contactDetails.pictureUrl} alt="" />
              </td>
              <td>{contactDetails.name}</td>
              <td> {contactDetails.popularity}</td>
              <td>{contactDetails.wonOscar && "🏆"}</td>
              <td>{contactDetails.wonEmmy && "🏆"}</td>
              <td>
                <button className="delete-btn"
                  onClick={() => {
                    deleteContact(contactDetails.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      </div>
    </div>
  );
}

export default App;
