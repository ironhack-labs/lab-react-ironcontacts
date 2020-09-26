import React from 'react';
import './Contact.css'

function Contact(props) {
    
    return(
        <div>
            <table className="contact-table">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                <tr>
                    <td><img className="contacts-img" src={props.picture} alt={props.name} /></td>
                    <td>{props.name}</td>
                    <td>{props.popularity}</td>
                </tr>
            </table>
        </div>

    )
}

export default Contact