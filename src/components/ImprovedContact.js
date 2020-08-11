import React from 'react';
import './Contacts.css';
const ImproveContact = (props) => {
  return (
    <tr>
      <td>
        <img className="image" src={props.pictureUrl} />
      </td>
      <td>
        <p>{props.name}</p>
      </td>
      <td>
        <p>{props.popularity.toFixed(2)}</p>
      </td>
      <td>
        <button onClick={props.clickToDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default ImproveContact;
