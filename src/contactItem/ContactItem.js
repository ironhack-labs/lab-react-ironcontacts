import React from "react";

function ContactItem({name, pictureUrl, popularity, removeContact}){

    return(

        <tr>
        <td>{name}
        </td>   
        <td><img src={pictureUrl}></img>
        </td>  
        <td>{popularity}
        </td>  
        <td><button onClick = {removeContact}>Remove</button>
        </td> 
    </tr>
    )

}

export default ContactItem