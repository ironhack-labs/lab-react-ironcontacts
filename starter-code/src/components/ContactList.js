import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {
  render() {
    const contactsList = this.props.contacts.map( (contact, i) => (
      <Contact key={i} contact={contact}/>
    ));
    return(
    <div className="container">
      <table className="table">
          <thead className="contacts-header">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contactsList}
          </tbody>
      </table>
    </div>
  )}
}

export default ContactList