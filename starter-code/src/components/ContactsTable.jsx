import React from "react";
import Contact from "./Contact"
// import contacts from "../contacts.json"



class ContactsTable extends React.Component {
  
  render() {
    return (
      <table id="contact-list" align="center">
        <tr className="table-header">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {this.props.contacts.map((oneContact, index) =>
          <Contact
            // key={index}
            name={oneContact.name}
            popularity={oneContact.popularity}
            pictureUrl={oneContact.pictureUrl}
          />)
        }
      </table>
    )
  }
}

export default ContactsTable;