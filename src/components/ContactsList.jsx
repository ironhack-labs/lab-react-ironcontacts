import React from 'react';
import Button from './Button';
import Contact from './Contact';

class ContactsList extends React.Component {
  state = {
    visibleContacts: this.props.contacts.slice(0, 5),
    storedContacts: this.props.contacts.slice(5, this.props.contacts.length),
  };

  randElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  handleAddRandom = () => {
    this.state.storedContacts.length > 0
      ? this.setState((oldState) => {
          const newContact = this.randElement(this.state.storedContacts);
          return {
            visibleContacts: [newContact, ...oldState.visibleContacts],
            storedContacts: oldState.storedContacts.filter(
              (hideContact) => hideContact?.id !== newContact?.id
            ),
          };
        })
      : alert('There are no more contacts to add');
  };
  handleSortBy = (orderType) => {
    this.setState((oldState) => {
      return {
        visibleContacts: oldState.visibleContacts.sort((a, b) =>
          a[orderType] > b[orderType] ? 1 : -1
        ),
      };
    });
  };
  deleteContact = (toDelete) => {
    this.setState((oldState) => {
      return {
        visibleContacts: oldState.visibleContacts.filter(
          (contact) => contact?.id !== toDelete?.id
        ),
        storedContacts: [
          toDelete,
          ...oldState.storedContacts.filter(
            (contact) => contact?.id !== toDelete?.id
          ),
        ],
      };
    });
  };
  render() {
    return (
      <div>
        <Button
          className="btn btn-primary mb-2 mr-2"
          onClick={this.handleAddRandom}
        >
          Add Random Contact
        </Button>
        <Button
          className="btn btn-secondary mb-2 mr-2"
          onClick={() => this.handleSortBy('name')}
        >
          Sort by name
        </Button>
        <Button
          className="btn btn-secondary mb-2"
          onClick={() => this.handleSortBy('popularity')}
        >
          Sort by popularity
        </Button>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.visibleContacts.map((contact, index) => (
              <Contact
                key={contact.id + index}
                contact={contact}
                deleteContact={this.deleteContact}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsList;
