import React from 'react'

const TableRow = ({pictureUrl, name, popularity, removeContact}) => {
    
    return (
        <>
        < tr >
                <td> <img src={pictureUrl} alt={name} /> </td>
                <td>{name}</td>
                <td>{parseFloat(popularity).toFixed(2)}</td>
                <td><button onClick={removeContact}>Delete</button></td>
        </tr >
        </>
    )
}

export default TableRow