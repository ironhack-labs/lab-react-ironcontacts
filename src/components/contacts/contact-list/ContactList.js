import { Component } from "react";
import contactsData from "../../../data/contacts.json";
import ContactItem from "../contact-item/ContactItem";

class ContactList extends Component {
  state = {
    contacts: [],
    randomContact:
      contactsData[Math.floor(Math.random() * contactsData.length)],
  };

  componentDidMount() {
    const fiveContacts = contactsData.splice(0, 5);
    this.setState({ contacts: fiveContacts });
  }

  handleDeleteContact(id) {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  }

  onAddRandomContact() {
      this.setState((prevState) => ({
        randomContact: contactsData[Math.floor(Math.random() * contactsData.length)],
      }))
  }

  render() {
    const { contacts } = this.state;
    const { randomContact } = this.state;

    return (
      <div>
        <h1>Ironcontacts</h1>
        <button
          type="button"
          className="btn btn-primary my-4"
          onClick={this.setState(contacts.push(randomContact))}
        >
          Add random contact
        </button>

        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Picture</li>
          <li className="list-group-item">Name</li>
          <li className="list-group-item">Popularity</li>
          <li className="list-group-item">Action</li>
        </ul>

        {contacts.map((contact) => (
          <ul key={contact.id} className="list-group list-group-horizontal">
            <ContactItem
              {...contact}
              onClickDelete={(id) => this.handleDeleteContact(id)}
            />
          </ul>
        ))}
      </div>
    );
  }
}

export default ContactList;
