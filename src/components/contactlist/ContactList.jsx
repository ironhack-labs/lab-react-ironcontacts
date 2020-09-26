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

  render() {
    return (
      <div className="FoodList">
        <div class="buttons">
          <button className="button is-primary" onClick={this.addRandomContact}>
            Add contact
          </button>
        </div>

        <div className="columns">
          <div className="column">
            {this.state.firstContacts.map((contact, key) => (
              <ContactBox key={key} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
