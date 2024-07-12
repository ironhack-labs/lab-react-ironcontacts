import React from "react";
import contacts from "../contacts.json";
import { useState } from "react";

export default function Body() {
  const [newContacts, setNewContacts] = useState(contacts.slice(0, 5));
  const addRandom=()=>{
    let added = false
    while(!added){
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const randomContact=contacts[randomNumber]
    console.log(randomContact)
    if(!newContacts.includes(randomContact)){
        setNewContacts([...newContacts,randomContact])
        added= true
    }else{}
  }}
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {newContacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" width="250" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🌟" : ""}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => addRandom()}>Randomize contacts</button>
    </div>
  );
}
