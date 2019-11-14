import React from 'react';

function ContactList(props) {

        return(
            <div>
            <tr>
                <td>{props.name}</td> 
                <td>{props.pictureURL}</td> 
                <td>{props.popularity}</td>
            </tr>
            </div>
        )
}
export default ContactList;