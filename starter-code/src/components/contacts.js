import React from 'react'

const contacts = (props) => {

      return (
        <div className="tableBody">
        <tr>
        <td><img src={props.pictureUrl} alt=''></img></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td><button onClick={() => props.deleteActor(props.id)}>Delete</button></td>
        </tr>
        </div>  
        );
    };
    
    export default contacts;