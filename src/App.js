import { useState } from "react";
import "./App.css";
import contactsFromJson from "./contacts.json";
function App() {
  //console.log(contactsFromJson);
  const firstFive = contactsFromJson.slice(0, 5);
  const [listOfContacts, setListOfContacts] = useState(firstFive);
  //console.log(firstFive);

const addContact = () =>{


const newList = contactsFromJson.filter((contact)=>{
return !listOfContacts.includes(contact)
})
const item = newList[Math.floor(Math.random()*newList.length)];

const newContact = [...listOfContacts];
newContact.push(item);

setListOfContacts(newContact);


 
}
///////////////// Sort by Name ///////////////////////

const sortByName = () =>{
const copyOfContacts = [...listOfContacts];
copyOfContacts.sort((a, b) => a.name.localeCompare(b.name));
setListOfContacts(copyOfContacts);

}

////////////////// SOrt by pop /////////////////////////////
const sortByPop = () =>{
  const copyPop = [...listOfContacts];
  copyPop.sort((a, b)=> b.popularity-a.popularity);
 setListOfContacts(copyPop);
}
/////////////// Delete Contact /////////////////////////////

const deleteContact = (id) => {

  const newListOfContacts = listOfContacts.filter((contact) => {
    return contact.id !== id;
  });
  setListOfContacts(newListOfContacts);
 };

  return (
    <div className="App">
      <h1>Contacts :</h1>

      <div>
        <button onClick={addContact} >Add Contact</button>
      </div>
      <div>
        <button onClick={sortByName} >Sort By name</button>
      </div>
      <div>
        <button onClick={sortByPop} >Sort By Popularity</button>
      </div>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </table>
      {listOfContacts.map((contactDetails) => {
        return (
          <div className="Contact">
            <table className="Contact-table">
              <tr>
                <td>
                  <img src={contactDetails.pictureUrl} alt="" />
                </td>
                <td>{contactDetails.name}</td>
                <td> {contactDetails.popularity}</td>
                <td>{ contactDetails.wonOscar && '🏆' }</td>
                <td>{ contactDetails.wonEmmy && '🏆' }</td>
                <td><button onClick={() => {
                deleteContact(contactDetails.id);
              }}>Delete</button></td>
              </tr>
            </table>
          </div>
        );
      })}

    </div>
  );
}

export default App;
