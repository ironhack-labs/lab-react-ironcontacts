import React from 'react'
function Contact(props){
    return <tr>
        <td><img src={props.picture} alt={props.name}/></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td><button onClick={props.deleteFunc}>delete</button></td>
    </tr>
}
export default Contact;