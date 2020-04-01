import React, {Component} from 'react'

function Contact (props) {
        return (
       
                <tr>
                <td><img className='image' src={props.pictureUrl} alt="Picture" /></td>
                <td><h6>Name: {props.name}</h6></td>
                <td><h6>Popularity: {props.rating}</h6></td>
                <button onClick={() =>{props.deleteContact(props.key);}}>Delete contact</button>
                </tr>
            
        )
    
}

export default Contact;