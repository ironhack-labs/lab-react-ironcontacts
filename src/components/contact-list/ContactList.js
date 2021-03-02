import React from 'react'
import contacts from '../../contacts.json'
import AddRandom from './add-random/AddRandom';
import Contact from './contact/Contact'


class ContactList extends React.Component {
  
  render() {
    const firstContacts = contacts.slice(0, 5);

    return (
      <table>
        <AddRandom />
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {
            firstContacts.map((contact, i) => {
              return <Contact contact={contact} />
            })
          }
        </tbody>
      </table>
    );
  }

}



export default ContactList
