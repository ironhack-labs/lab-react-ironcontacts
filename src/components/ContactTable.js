import React from "react"

const ContactTable = ({ pictureUrl, name, popularity, id, killContact }) => {

    console.log(killContact);

    return (
         
        <tr>
        <td><img style={{width:100}} src={pictureUrl} /></td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
        <td><button onClick={() => killContact()}>Delete</button></td>
        </tr>

    )
}
export default ContactTable