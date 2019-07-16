import React from "react";
import IronContact from "./IronContact";

export default class ContactsDisplayer extends React.Component {
  render() {
    return (
      <section className="contactDisplayer">
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.props.contactsSelected.map((contact, idx) => (
            <IronContact
              name={contact.name}
              pictureUrl={contact.pictureUrl}
              popularity={contact.popularity}
              key={idx}
            />
          ))}
        </table>
      </section>
    );
  }
}
