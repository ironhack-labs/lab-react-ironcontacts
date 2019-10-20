import React from 'react'

function Actor(props){
    return (
        <tr className="actor-container">
            <td><img src={props.pictureUrl}/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick={() => {
                props.deleteActor(props.index)
            }}
            >Delete</button></td>
        </tr>
    )
}

export default Actor