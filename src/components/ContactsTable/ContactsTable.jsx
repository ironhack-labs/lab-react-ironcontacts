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

  sortByName = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort((a, b) => (a.name > b.name ? 1 : -1)),
    }));
  };

  sortByPopularity = () => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort((a, b) =>
        a.popularity > b.popularity ? -1 : 1
      ),
    }));
  };

  render() {
    return (
      <>
        <div className="buttons">
          <Button onClick={this.addRandomContact} text="Add Random Contact" />
          <Button onClick={this.sortByPopularity} text="Sort by popularity" />
          <Button onClick={this.sortByName} text="Sort by name" />
        </div>

        <table className="ContactsTable">
          {console.log(this.state.contacts)}
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
