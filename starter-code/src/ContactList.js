import React, { Component } from "react";
import ContactCard from "./ContactCard.js";
import contacts from "./contacts.json";

class Contactlist extends Component {
  render() {
    return (
      <ul>
        {contacts.slice(0, 5).map((oneContact, index) => {
          return (
            <ContactCard
              key={index}
              pictureUrl={oneContact.pictureUrl}
              name={oneContact.name}
              popularity={oneContact.popularity}
            />
          );
        })}
      </ul>
    );
  }
}
export default Contactlist;
