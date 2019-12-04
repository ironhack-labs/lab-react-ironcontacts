import React from 'react';
// import contacts from './contacts.json'
import './styles.css'
import Button from './button'

const ContactCard = props => {

// console.log(props)
    return (
        <tr>
            <td> <div className='col-md-12'><img className='imgClass' src={props.pictureUrl} ></img></div> </td>
            <td> <h4>{props.name}</h4></td>
            <td> <p>{props.popularity}</p></td>
            <td> <Button click={props.delete} text = 'Delete' /> </td>
        </tr>
    )
};

export default ContactCard