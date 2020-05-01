import React from 'react'

export default function 
(props) {

    return (      

        <tr><td><img src={props.pictureUrl} alt=''></img></td><td>{props.name}</td><td>{props.popularity}</td>
        <td><button onClick={() => props.deleteContact(props.key)} >delete</button></td></tr>     
           
    )
}
