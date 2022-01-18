import React from "react";



const Remove = ({contacts, setContacts, onDelete, id}) => {
 
      return(
        <td><button onClick={() => {onDelete(id)}}>Delete</button></td>
        )
}
export default Remove;