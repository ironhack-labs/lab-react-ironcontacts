import React from 'react'

const Row = (props) => {
    
    return(
        <tr key={props.id}>
                <td> <img className="photo"src={props.pictureUrl} alt=""/></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
                <button onClick={props.clickToDelete}>Delete</button>
        </tr>
    )
}

export default Row