import React from 'react';

const ContactTable = (props) => {
  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

export default ContactTable;