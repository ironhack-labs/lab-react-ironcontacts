import React from 'react';

function Contact(props){
    function twoDecimals(number) {
        let roundNumber = Math.round(number * 100) / 100;
        return roundNumber;
    }

    return(
        <tr className="contact">
            <td><img src={props.pictureUrl} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{twoDecimals(props.popularity)}</td>
            <td><button onClick={props.clickToDelete}>Delete</button></td>
        </tr>
    )
}

export default Contact;