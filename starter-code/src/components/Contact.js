import React from 'react';
import "./Contact.css"

export const Contact = (props) => {
    return (
        <div className="contactList">
            <img src={props.pictureUrl} />
            <h3>{props.name}</h3>
            <h3>{props.popularity}</h3>
            <button className="button4" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}

