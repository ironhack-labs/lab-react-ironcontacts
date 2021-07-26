import { Component } from "react";
import contactsData from "../../../data/contacts.json";
import ContactItem from "../contact-item/ContactItem";

class ContactList extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    const fiveContacts = contactsData.slice(0, 5);
    this.setState({ contacts: fiveContacts });
  }

  handleDeleteContact(id) {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  }

  handleAddRandomContact() {
    const { contacts } = this.state;
    const restOfContacts = contactsData.filter(
      ({ id }) => !contacts.some((contact) => contact.id === id)
    );

    if (restOfContacts.length > 0) {
      const randomContact =
        restOfContacts[Math.floor(Math.random() * restOfContacts.length)];
      this.setState(({ contacts }) => ({
        contacts: [...contacts, randomContact],
      }));
    }
  }

  handleSortByName() {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort((a, b) => a.name.localeCompare(b.name))
    }));
  }

  handleSortByPopularity() {
    this.setState((prevState) => ({
      contacts: prevState.contacts.sort((a, b) => b.popularity - a.popularity)
    }));
  }

  render() {
    const { contacts } = this.state;

    return (
      <>
        <div className="d-flex flex-column justify-content-center">
          <h1 className="d-flex justify-content-center">Ironcontacts</h1>
          <div className="d-flex flex-row justify-content-center">
          <button
            type="button"
            className="btn btn-primary my-4 mx-3"
            onClick={() => this.handleAddRandomContact()}
          >
            Add random contact
          </button>
          <button
            type="button"
            className="btn btn-primary my-4 mx-3"
            onClick={() => this.handleSortByName()}
          >
            Sort by name
          </button>
          <button
            type="button"
            className="btn btn-primary my-4 mx-3"
            onClick={() => this.handleSortByPopularity()}
          >
            Sort by popularity
          </button>
          </div>
          
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                {...contact}
                onClickDelete={(id) => this.handleDeleteContact(id)}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default ContactList;

/*this.setState((prevState) => {
      const { contacts } = prevState
      return {
        contacts: [...contacts, randomContact ]  //al deconstruir el anterior el nuevo array no tiene la memoria con el anterior, si no que es nuevo y le añadimos el elemento que queremos
      }    
    })*/
