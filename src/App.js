import { useState } from "react";
import "./App.css";
import contactsFromJson from "./contacts.json";
function App() {
  //console.log(contactsFromJson);
  const firstFive = contactsFromJson.slice(0, 5);
  const [listOfContacts, setListOfContacts] = useState(firstFive);
  //console.log(firstFive);

const addContact = () =>{
  const item = contactsFromJson[Math.floor(Math.random()*contactsFromJson.length)];
 // console.log(item);
  const newList = [...listOfContacts];
  
  newList.push(item);
 // console.log(newList);
  setListOfContacts(newList);
}


  return (
    <div className="App">
      <h1>Contacts :</h1>

      <div>
        <button onClick={addContact} >Add Contact</button>
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
               
              </tr>
            </table>
          </div>
        );
      })}

    </div>
  );
}

export default App;
