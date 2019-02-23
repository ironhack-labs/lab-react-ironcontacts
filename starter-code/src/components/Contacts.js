import React from 'react';

const Contact = ({name, pictureUrl, popularity})=>{
    return(
    <tr>
    <td><img src={pictureUrl} alt={name}></img></td>
    <td>{name}</td>
    <td>{popularity}</td>
    </tr>
    
  )
}

export default Contact;