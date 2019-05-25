import React from 'react';

const Contact = (props) => {
  
  return (
    <tr>
      <td><img className="img-fluid img-thumbnail" src={props.data.pictureUrl}/></td>
      <td>{props.data.name}</td>
      <td>{props.data.popularity}</td>
      <td><button onClick={props.deleteContact}>Delete</button></td>
    </tr>
    
  )
}

export default Contact