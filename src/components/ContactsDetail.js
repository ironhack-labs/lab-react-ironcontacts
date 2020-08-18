import React from 'react';

function ContactDetails(props) {
    return (
        <React.Fragment>
            <tr className="tablerow">
                <td><img className="contact-picture" src={props.contact.pictureUrl} alt="Contact"></img></td>
                <td>{props.contact.name}</td> 
                <td>{props.contact.popularity.toFixed(2)}</td>
                <td><button onClick={() => props.onDelete(props.id)} className="del-btn">Delete</button></td>
            </tr>
        </React.Fragment>
    )
}

export default ContactDetails;
