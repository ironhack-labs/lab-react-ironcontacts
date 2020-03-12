import React from 'react';
import Image from 'react-bootstrap/Image'

const ContactItem = ({contact}) => {
  return(
    <tr>
      <td><Image src={contact.pictureUrl} rounded style={{width: "10%"}}/></td>
      <td className="name">{contact.name}</td>
      <td className="popularity">{contact.popularity}</td>
    </tr>
  );
}


export default ContactItem;