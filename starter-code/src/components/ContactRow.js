import React from 'react'

const ContactRow = (props) =>{
  return(
    <tr>
      <td><img src={props.pictureUrl} alt='contactpicture' width='100px'></img></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button onClick={props.delete}>Delete</button></td>
    </tr>
  );
}

export default ContactRow