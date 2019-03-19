import React from "react"

const Actor = ({pictureUrl, name, popularity, clickToDelete}) => {

    return (
        <tr>
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={clickToDelete}>Delete</button></td>
        </tr>
    )

}
 
export default Actor;
