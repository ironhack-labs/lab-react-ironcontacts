import React from 'react'

 function ActorsCard(props) {
    return (
        <div className="actorscard">
        <table>
            <tbody>
            <tr>
                <td><img className="image" src={props.img} alt=" img" /></td>
                <td><p>{props.name}</p></td>
                <td><p>{props.popularity}</p></td>
                <td> <button onClick = {props.delete}>  delete me </button></td> 

            </tr>
           </tbody>
        </table>
        </div>
    )
}
export default ActorsCard