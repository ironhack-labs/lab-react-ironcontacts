import React from 'react';

const ContactTable = ({
  name,
  pictureUrl,
  popularity
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
    </tr>
  );
};

export default ContactTable;