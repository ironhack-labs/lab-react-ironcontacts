import React from "react";
import "./ContactList.css"


const Table = ({ name, pictureUrl, popularity }) => {
// console.log({name})
    return (
        <tr>
            <td> <img src={pictureUrl} alt={name} /> </td>
            <td>{name}</td>
            <td>{popularity}</td>
        </tr>
    )


} 


export default Table