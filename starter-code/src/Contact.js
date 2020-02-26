import React from "react";
import "./Contacts.css";

function Contact(props){
   const {name,img,popularity,toDelete} = props
   return (
     <tr>
       <td className="border-right border-bottom">
         <img src={img} alt={name} />
       </td>
       <td className="border-right border-bottom">{name}</td>
       <td className="border-right border-bottom">{popularity.toFixed(2)}</td>
       <td className="border-bottom">
         <button className="delete" onClick={toDelete}>Delete</button>
       </td>
     </tr>
   );

}

export default Contact