import React from 'react';

const Contact = ({ name, pictureUrl, popularity, deleteRow }) => {
  return (
    <tr className="Contact">
      <td><img src={pictureUrl} alt={name}></img></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td><button onClick={deleteRow}>Delete!</button></td>
    </tr>
  );
}

export default Contact;