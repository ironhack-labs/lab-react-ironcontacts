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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contactsSelected.map((contact, idx) => (
              <IronContact
                name={contact.name}
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity}
                key={idx}
                deleteContact={() => this.props.deletebtn()}
                idx={idx}
              />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}
