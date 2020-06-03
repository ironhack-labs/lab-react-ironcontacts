import React from "react"

function Contact (props){

    return(
    <tr>
        <td><img src={props.pictureUrl} height="200px"></img></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td><button onClick={props.delete}>Delete</button></td>
    </tr> 
    )

}

export default Contact