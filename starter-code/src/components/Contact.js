import React from 'react';
import './Contact.scss'

function Contact(props){
    return (
        <tr className="contactBox">
            <td><img src={props.pictureUrl} alt='contactImg' className='contactImg'/></td>
            <td className='contactName'>{props.name}</td>
            <td className='popularityRate'>{props.popularity}</td>
            <td className='btn-box-delete'><button onClick={() => {props.deleteMe(props.name)}}>Delete</button></td>
        </tr>
    )
};
  
export default Contact;