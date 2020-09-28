import React from 'react';
import Contact from './Contact';

class ListContacts extends React.Component {
  state = {
    visibleContacts: this.props.contacts.slice(0, 5),
    hiddeContacts: this.props.contacts.slice(5, this.props.contacts.length),
  };

  randElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  handleAddRandom = () => {
    if (this.state.hiddeContacts.length > 0) {
      const newContact = this.randElement(this.state.hiddeContacts);
      this.setState((oldState) => {
        return {
          visibleContacts: [newContact, ...oldState.visibleContacts],
          hiddeContacts: oldState.hiddeContacts.filter(
            (hideContact) => hideContact !== newContact
          ),
        };
      });
    } else {
      alert('There are no more contacts to add');
    }
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary mb-2" onClick={this.handleAddRandom}>
          Add Random Contact
        </button>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.visibleContacts.map((contact, index) => (
              <Contact key={contact.id + index} contact={contact} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListContacts;
