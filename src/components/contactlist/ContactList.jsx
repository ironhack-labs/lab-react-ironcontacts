import React from 'react';
import ContactBox from '../contactbox/ContactBox';

class ContactList extends React.Component {
  state = {
    firstContacts: this.props.contacts.slice(0, 5),
  };
  addRandomContact = () => {
    const contactList = this.props.contacts;
    const random = Math.floor(Math.random() * (contactList.length - 6)) + 6;
    this.setState({
      firstContacts: [...this.state.firstContacts, contactList[random]],
    });
  };

  shortByName = () => {
    const contactList = this.props.contacts;
    contactList.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    this.setState({
      firstContacts: [...contactList],
    });
  };

  shortByPopularity = () => {
    const contactList = this.props.contacts.sort();
    contactList.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      firstContacts: [...contactList],
    });
  };

  onDelete = (id) => {
    this.setState({
      firstContacts: this.state.firstContacts.filter((c) => c.id !== id),
    });
  };

  render() {
    return (
      <div className="FoodList">
        <div class="buttons">
          <button className="button is-primary" onClick={this.addRandomContact}>
            Add contact
          </button>
          <button className="button is-info" onClick={this.shortByName}>
            Sort by name
          </button>
          <button
            className="button is-warning"
            onClick={this.shortByPopularity}
          >
            Sort by popularity
          </button>
        </div>

        <div className="columns">
          <div className="column">
            {this.state.firstContacts.map((contact, key) => (
              <ContactBox
                key={key}
                contact={contact}
                onDelete={this.onDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
