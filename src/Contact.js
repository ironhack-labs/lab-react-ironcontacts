import React from 'react';

const contact = ({ pictureUrl, name, popularity, deleteContact }) => {
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt={name} />
      </td>
      <td>
        <h4>{name}</h4>
      </td>
      <td>
        <p>{popularity.toFixed(2)}</p>
      </td>
      <td>
        <button onClick={deleteContact}>delete</button>
      </td>
    </tr>
  );
};

export default contact;
