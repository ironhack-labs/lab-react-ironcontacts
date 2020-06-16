import React from 'react'

function Contact (props){

    return(
    <tbody>   
    <tr>
        <td><img src={props.pictureUrl} height="400x"></img></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td><button name ={props.name} onClick={props.delete}>Delete</button></td>
    </tr> 
    </tbody>
    )

}

export default Contact