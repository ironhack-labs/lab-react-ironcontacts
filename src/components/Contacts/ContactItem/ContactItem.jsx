import React from "react"


function ContactItem({ name, pictureUrl, popularity, id, wonOscar, wonEmmy, number }) {

    return (
        <tbody>
         <tr className="table-row">
           <th scope="row">{number}</th>
           <td ><img src={pictureUrl} alt={name} height={80}/></td>
           <td>{name}</td>
           <td>{popularity.toFixed(2)}</td>
           <td>{wonOscar ? '🏆' : ''}</td>
           <td>{wonEmmy ? '🏆' : ''}</td>
         </tr>
         </tbody>
    )
}

export default ContactItem;

