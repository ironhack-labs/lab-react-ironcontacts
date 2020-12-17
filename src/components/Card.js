import React from 'react';
import '../App.css';
import DeleteButton from './DeleteButton';


function Card(props) {
    const { name, pictureUrl, popularity, id } = props.contact;

    return (
        <div className="card-div">
            <div className="delete-button-div">
                <DeleteButton handleClick={() => {props.deleteContact(id)}} />
            </div>
            
            <tr id={id}>
                <td><img src={pictureUrl} alt="contact img" width="100" height="150" /></td>
                <td>{name}</td>
                <td>{popularity}</td>
            
            </tr>

        </div>
        
    )
}

export default Card;
