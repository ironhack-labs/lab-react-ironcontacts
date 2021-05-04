import React from 'react';
import reactDom from 'react-dom';
import './Contact.css';

function Contact({ name, pictureUrl, popularity, id }) {
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
    </div>
  );
}

export default Contact;
