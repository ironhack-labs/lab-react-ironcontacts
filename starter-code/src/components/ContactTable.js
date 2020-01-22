import React from 'react';

const ContactTable = ({name, pictureUrl, popularity}) => {
  return(
    <table>
      <tr>
        <td> 
          <img src={pictureUrl}alt={pictureUrl}/>
        </td>
        <td>
          {name}
        </td>
        <td>
          {popularity}
        </td>
      </tr>
    </table>
  );
};

export default ContactTable;