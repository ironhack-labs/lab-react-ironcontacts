import React, { useState } from 'react'
const Contact = (props) => {

    return <tr>
        <img style={{width : "100px", height : "100px"}} src={props.pictureUrl}></img>
        <td> {props.name}</td>
        <td>{(props.popularity).toFixed(2)}</td>
        <button onClick={props.handleDelete}>❌</button>
    </tr>
}

export default Contact