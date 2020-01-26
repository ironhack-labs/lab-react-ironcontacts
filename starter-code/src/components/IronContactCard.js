import React from 'react';

const ironContactCard = (props) => {    
    return (       
        <tr className = "ironContacts-container-items">
            <td><img className='img' src= {props.pictureUrl} alt="contact"/></td>
            <td>{props.name}</td>
            <td>{props.popularity.toFixed(2)}</td>
            <td><button onClick={props.clickDelete}>Delete</button></td>
        </tr>               
    )    
}
export default ironContactCard;