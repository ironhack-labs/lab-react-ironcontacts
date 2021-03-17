import React, { Component } from "react";
import contactsJSON from "../contacts.json";

// console.log(contactsJSON);

class Contacts extends Component {
  state = {
    contacts: contactsJSON.slice(0, 5),
  };

  render() {
    console.log(this.state);

    return (
      <div>

<table>
    <thead>
        <tr>
        <th>Name</th>
        <th>Picture</th>
        <th>Popularity</th>
            
        </tr>
    </thead>


    <tbody key = {contact.id}>
        <tr>
            <td>{contact.name}</td>
            <td><img style={{width: ""}}
            
            className="my-image" src="{contact.pictureUrl}" alt="" /></td>
            <td>{contact.popularity}</td>
        </tr>
    </tbody>
</table>




        <ul>
          {this.state.contacts.map((contact) => (
            <li>{contacts.name}</li>
          ))}
     
      </ul>
      </div>
    );
  }
}

export default Contacts;


