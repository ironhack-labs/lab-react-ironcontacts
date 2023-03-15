import React from "react";
import ContactsItem from "../ContactsItem/ContactsItem";
import Button from "../Buttons/Buttons";
import "./ContactsTable.css";
import contacts from "../../contacts.json";

class ContactsTable extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandomContact = () => {
    const randomContact = contacts.splice(0, 1);

    this.setState((prevState) => ({
      contacts: [randomContact[0], ...prevState.contacts],
    }));
  };

  render() {
    return (
      <>
        <Button onClick={this.addRandomContact} text="Add Random Contact" />

        <table className="ContactsTable">
          {console.log(contacts)}
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
            {this.state.contacts.map((contact) => (
              <ContactsItem {...contact} key={contact.id} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ContactsTable;
