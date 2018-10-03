import React from 'react' //stateless


////

const ContactsDisplay = (props) => {
   return(
       <tr>
           <td><img src={props.pictureUrl} alt="img" height="100px"/></td>
           <td>
           {props.name}
           </td>
           <td>
           {props.popularity}
           </td>
           <td>
             <button onClick={props.delete}>Eliminar</button>
             </td>
       </tr>
   )
}






///
export default ContactsDisplay