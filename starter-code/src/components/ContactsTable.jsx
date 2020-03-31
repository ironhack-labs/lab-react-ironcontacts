import React from "react";
import Contact from "./Contact"

class ContactsTable extends React.Component {

  render() {
    return (
      <table id="contact-list" align="center">
        <thead>
          <tr className="table-header">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map((oneContact, index) =>
            <Contact
              key={index}
              name={oneContact.name}
              popularity={oneContact.popularity}
              pictureUrl={oneContact.pictureUrl}
              onDelete={() => {
                this.props.deleteContact(index)
              }}
            />)
          }
        </tbody>
      </table>
    )
  }
}

export default ContactsTable;