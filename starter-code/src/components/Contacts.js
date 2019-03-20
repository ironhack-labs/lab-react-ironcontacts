import React from 'react';

const Contacts = props => {
 return (
  
  
  <tr>
       <td><img src={props.pictureUrl} alt=""/></td>
       <td>{props.name}</td>
       <td>{props.popularity}</td>
       <td><button onClick={props.deleteContact}>Delete</button></td>
   </tr>

 )
};

export default Contacts;