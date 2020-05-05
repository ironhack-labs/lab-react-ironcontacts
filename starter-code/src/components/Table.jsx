import React from 'react'

const Table = (props) => {
    return (
         <tr>
            <td><img src={props.img} alt=""/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td> {props.children} </td>
       </tr>
               
    )
}

export default Table
