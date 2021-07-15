import React from 'react';
import "./Card.css";

function Card({ name, pictureUrl, popularity, id, removeContact }) {
    return (
        <div className="card">
            <div className="content">
                <img src={pictureUrl} alt={pictureUrl} />
                <h3>{name}</h3>
                <h3>{popularity.toFixed(2)}</h3>
                <button onClick={() => removeContact(id)}>Delete</button>
            </div>
        </div>
    );
}

export default Card