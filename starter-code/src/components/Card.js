import React from 'react';
const Card = (props) => {

    return (
        <div className="columns">
            <div className="column"><h2>{props.name}</h2></div>
            <div className="column"><img src={props.pictureUrl} /></div>
            <div className="column"><p>Popularity: {props.popularity}</p></div>
            <div className="column"><button onClick={props.clickToDelete}>Delete</button></div>
        </div>
    )
};

export default Card;