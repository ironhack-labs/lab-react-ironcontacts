import React from 'react';
import './Contacts.css';

function Contact(props) {
  return (
    <div className="contactTable">
      <tr>
        <td>
          {' '}
          <img src={props.pictureUrl} alt={props.name} height="110px" />
        </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td>
          <button onClick={props.clickToDelete}>Delete Celebrity</button>
        </td>
      </tr>
    </div>
  );
}

export default Contact;
