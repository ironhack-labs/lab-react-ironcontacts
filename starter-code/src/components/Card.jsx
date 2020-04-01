import React from 'react';

function Card(props) {
    return (
            <tr>
                <td><img src={props.pictureUrl} alt=""/></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
            </tr>
    );
}

export default Card;
