import React from "react";
import IronContact from "./IronContact";
import "./ContactsDisplayer.css";

export default class ContactsDisplayer extends React.Component {
  render() {
    return (
      <section className="contactDisplayer">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contactsSelected.map((contact, idx) => (
              <IronContact
                name={contact.name}
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity}
                key={idx}
              />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}
