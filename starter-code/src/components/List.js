import React from 'react'

const List = ({ actorName, actorPic, actorPopularity, deleteActor }) =>
    <table>
        <tbody>
            <tr>
                <td><img src={actorPic} alt={actorName}></img></td>
                <td>{actorName}</td>
                <td>{Math.floor(actorPopularity)}/20</td>
                <td><button onClick={deleteActor}>Delete</button></td>
            </tr>
        </tbody>
    </table>

export default List
