import React from 'react';

const Contacts = ({contact, index, deleteActor})=>( 

 
    <tr key={index}>

      
      <td ><img src={contact.pictureUrl} height="300" width="175" alt="img"></img></td>
      <td >{contact.name}</td>
      <td >{contact.popularity.toFixed(2)}</td>
      <td ><button onClick={()=> deleteActor(contact)} className="btn btn-danger">Delete</button></td>
     
    </tr>    
    
  
)

export default Contacts