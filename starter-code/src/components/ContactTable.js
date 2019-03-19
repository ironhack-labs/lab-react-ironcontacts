import React from 'react';


const ContactTable = ({pictureUrl, name, popularity, clickToDelete}) => {

  return (
      <tr className="contact-items">
 
          <th><img className="contact-image" src={pictureUrl} /></th>
          <th>{name}</th>
          <th>{popularity}</th> 
          <th><button onClick={clickToDelete}>Delete</button></th>

      </tr>
  )
}



export default ContactTable