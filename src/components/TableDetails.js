import React from 'react'

function TableDetails(props){
    console.log(props)
    return (
        <>
        <tr>
            <td><img src={props.table.pictureUrl} alt={props.table.name}/></td>
        </tr>
        <tr>
            <td>{props.table.name}</td>
        </tr>
        <tr>
            <td>{props.table.popularity}</td>
        </tr>    
        <tr>
            <td><button onClick={() => props.onDelete(props.id)}>Delete</button></td>
        </tr>    
    </>
    )
}


export default TableDetails