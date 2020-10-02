import React from 'react';

class ContactsCard extends React.Component {
  state = {
    contacts: [
      this.props.contacts[0],
      this.props.contacts[1],
      this.props.contacts[2],
      this.props.contacts[3],
      this.props.contacts[4],
    ],
  };

  addRandomContact = () => {
    const arrLength = this.props.contacts.length;
    const randomIndex = Math.floor(Math.random() * (arrLength - 5) + 5);
    this.setState({
      contacts: [...this.state.contacts, this.props.contacts[randomIndex]],
    });
  };

  contactsSort = (key) => {
    function compare(a, b) {
      const keyA = a[key];
      const keyB = b[key];
      let comparison = 0;
      if (keyA > keyB) comparison = 1;
      if (keyB > keyA) comparison = -1;
      if (key === 'popularity') comparison *= -1;

      return comparison;
    }

    this.setState({
      contacts: this.state.contacts.sort(compare),
    });
  };

  deleteContact = (index) => {
    this.state.contacts.splice(index, 1);
    this.setState({
      contacts: this.state.contacts,
    });
  };

  render() {
    const renderContacts = this.state.contacts.map((contact, i) => (
      <tbody>
        <tr>
          <td>
            <img id="picture" src={contact.pictureUrl} alt="contact" />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>
            <button onClick={() => this.deleteContact(i)}>Delete</button>
          </td>
        </tr>
      </tbody>
    ));

    return (
      <div>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={() => this.contactsSort('name')}>Sort by name</button>
        <button onClick={() => this.contactsSort('popularity')}>
          Sort by popularity
        </button>
        <h1 className="title">IronContacts</h1>
        <table className="contact-table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          {renderContacts}
        </table>
      </div>
    );
  }
}

export default ContactsCard;
