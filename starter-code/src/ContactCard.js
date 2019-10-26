import React from 'react';


const ContactCard = (props) => {
    return (<div>
        <table>
            <tr>
                <th>
                    <img height="100px" alt="broken" src={props.pictureUrl}></img>
                </th>

                <th>
                    <p>{props.name} </p>
                </th>
                <th>
                    <p> {props.popularity}</p>
                </th>

                <th>
                    <button onDelete={props.onDelete}>Delete</button>
                </th>
            </tr>
        </table>
    </div>)
}

export default ContactCard;