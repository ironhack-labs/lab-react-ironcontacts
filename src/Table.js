import React from "react";
import "./ContactList.css"


const Table = ({ name, pictureUrl, popularity, removeContact }) => {
// console.log({name})
    return (
        <tr>
            <td> <img src={pictureUrl} alt={name} /> </td>
            <td>{name}</td>
            <td>{popularity}</td>
            <button onClick={removeContact}>Remove contact</button>
        </tr>
    )


} 


export default Table