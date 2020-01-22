import React from 'react';

const ContactTable = ({
  name,
  pictureUrl,
  popularity,
  onDelete
}) => {
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt={pictureUrl} />
      </td>
      <td>
        {name}
      </td>
      <td>
        {popularity}
      </td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default ContactTable;