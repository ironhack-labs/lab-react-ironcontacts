import React from "react"

export default function List(props) {
    return (
        <table style={{ width: "50%", textAlign: "center" }}>
            <tr>
                <th><img src={props.picture} height="150px"/></th>
                <th>{props.name}</th>
                <th>{props.popularity}</th>
                <th><button onClick={props.onDelete}>Delete</button></th>
            </tr>
        </table>


    )
}