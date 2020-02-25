import React from "react";

function Contact(props){
   const {name,img,popularity,toDelete} = props
   return (
     <tr>
       <td>
         <img src={img} alt={name} />
       </td>
       <td>{name}</td>
       <td>{popularity.toFixed(2)}</td>
       <td>
         <button onClick={toDelete}>Delete</button>
       </td>
     </tr>
   );

}

export default Contact