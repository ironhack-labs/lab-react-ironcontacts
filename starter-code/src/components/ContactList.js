import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {
  render() {
    const celeb = this.props.contacts.filter( (_, i) => i < 5);
    const contactsToDisplay = celeb.map( (contact, i) => (
      <div key={i}>
        <Contact contact={contact}/>
      </div>
    ));
    return(
    <div className="row">
      <ul className="contacts-header">
        <li>Picture</li>
        <li>Name</li>
        <li>Popularity</li>
      </ul>
      <div className="row">
        {contactsToDisplay}
      </div>
    </div>
  )}
}

export default ContactList