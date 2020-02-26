import React from "react"
import "./ContactLine.css"

const Contact = props => {
    return (
        <tr>
            <td>
                <img src={props.pictureUrl} alt={props.name}></img>
            </td>
            <td>{props.name}</td>
            <td>{props.popularity.toFixed(2)}</td>
            <td><button onClick={props.deleteContact} >Delete</button></td>

        </tr>
    )
}

export default Contact