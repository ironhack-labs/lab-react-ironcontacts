import React from 'react';
import './Contact.css';

function Contact({ name, pictureUrl, popularity, removeItem }) {
  return (
    <div className="contact-item">
      <table>
        <tr>
          <td>
            <img src={pictureUrl}></img>
          </td>
          <td>{name}</td>
          <td>{popularity}</td>
        </tr>
      </table>
      <button onClick={removeItem}>Remove contact</button>
    </div>
  );
}

export default Contact;
