import React from 'react';
import '../App.css';



const contactCard = props => {
    return (
        <div>
            <tr>
                <td><img src={props.pictureUrl} alt={props.name}></img></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
                <td><button onClick={props.buttonDelete}>Delete</button></td>
            </tr>
        </div>
    )
}

export default contactCard 


