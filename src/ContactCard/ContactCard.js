import React from 'react';

function ContactCard({name, pictureUrl, popularity}) {
   
  return (
    <div>
      <td>
        <img src={pictureUrl}></img>
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
    </div>
  );
      

  }

export default ContactCard;