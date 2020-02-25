import React from 'react';
import './contactCard.css';


const ContactCard = ({name,pictureUrl,popularity,deleteOne}) => {
  return (
      <tr>
        <td><figure><img src={pictureUrl} alt={name}></img></figure></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td> <button onClick={deleteOne}>delete</button> </td>
      </tr>
    )
}

export default ContactCard;
