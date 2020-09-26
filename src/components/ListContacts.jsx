import React from 'react';
import Contact from './Contact';

const ListContacts = (props) => (
  <table className="table table-hover">
    <thead className="thead-dark">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
      {props.contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </tbody>
  </table>
);

export default ListContacts;
