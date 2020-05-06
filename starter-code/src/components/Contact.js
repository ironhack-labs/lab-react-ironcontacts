import React from 'react'
import './Contact.css'


const Contact = (props)=>{
 

    return(
<tr >
<th><img src={props.pictureUrl} alt=""/></th>
<th>{props.name}</th> 
<th>{props.popularity}</th>
<button onClick={ ()=> props.deleteContact(props.id)}>Delete</button>
            </tr>
    )
}

export default Contact;