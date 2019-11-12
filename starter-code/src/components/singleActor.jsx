import React from 'react';

export default function OneSingleActor(props){

    return(
        <tr className="card">
            <td><img src={props.theActor.pictureUrl} alt="Actor"/></td>
            <td>{props.theActor.name}</td>
            <td>{props.theActor.popularity}</td>
            <td><button onClick = {()=>{this.deleteActor(i)}}>Delete</button></td> 
        </tr>
    )

}