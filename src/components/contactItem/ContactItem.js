import React from "react";

function ContactItem({id, picture, name, popularity}){
  return(

    <tr className="contact-item">
      <td><img src={picture} alt="picture"></img> </td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
  )



}



export default ContactItem;

