// src/App.js
import "./Main.css";
import contactsArray from "../contacts.json";
import { useState } from "react";



function Main() {

  const [contacts, setContacts] = useState(contactsArray);

  const fistFive = contacts.slice(0, 20);
  console.log(fistFive);


  return <div className="main" >
    
    <table>
    <tr>
            <th><h3>Picture</h3></th>
            <th><h3>Name</h3></th>
            <th><h3>Popularity</h3></th>
            <th><h3>Won an Oscar</h3></th>
            <th><h3>Won an Emmy</h3></th>

          </tr>


      {fistFive.map((contact) => {

        return (
          <tr>
            <th><img src={contact.pictureUrl} /></th>
            <th><p>{contact.name}</p></th>
            <th><p>{contact.popularity}</p></th>
            <th>{contact.wonOscar && <p> 🏆 </p>}</th>
            <th>{contact.wonEmmy && <p> Yes </p>}</th>
          </tr>
        )
      })}

    </table>
  </div>;
}

export default Main;