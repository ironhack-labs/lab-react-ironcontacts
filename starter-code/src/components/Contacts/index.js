import React from 'react';
import './style.css';

const Contacts = props => {
  return (
    <tbody className="contacts-info">
      <tr>
        <td>
          <img src={props.picture} alt={props.name} />
        </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td>
          <button onClick={() => props.delete(props.id)}>Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default Contacts;
