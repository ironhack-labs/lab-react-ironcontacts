import React from "react";

function Card(props) {
    return (<tr>
        <td>
            <img src={props.pictureUrl} alt=""></img>
        </td>
        <td>
            <p>{props.name}</p>
        </td>
        <td>
            <p>{props.popularity.toFixed(2)}</p>
        </td>
    </tr>
    )
};

export default Card;