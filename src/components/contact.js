import React from 'react'

const Contact = (props)  => {
    return (
        <div className="contact-div">
        <table>
            <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            </tr>
            <tr>
            <td><img src={props.pictureUrl} alt={props.name} width="150px"/></td>
            <td><h3>{props.name}</h3></td>
            <td><p>{props.popularity}</p></td>
            </tr>
        </table>
        </div>
    )
};

export default Contact;
