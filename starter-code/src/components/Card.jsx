import React from 'react';

function Card(props) {
        return (
            <tr>
                    <td>
                        <img src={props.pictureUrl} alt={props.name} />
                    </td>
                    <td>{props.name}</td>
                    <td>{props.popularity}</td>
                    <button onClick={() =>{props.deleteContact(props.contactIndex);}}>Remove this contact</button>
            </tr>
        );
}

export default Card;
