import React from 'react';
import Button from '../components/Button';

function Contact(props) {
    const { name, pictureUrl, popularity, id, deleteContact } = props;
    return (
      <tr>
        <td>
          <img src={pictureUrl} width="100px" />
        </td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
        <td>
          <Button onClick={() => deleteContact(id)}>Delete</Button>
        </td>
      </tr>
    );
  }
  

export default Contact
