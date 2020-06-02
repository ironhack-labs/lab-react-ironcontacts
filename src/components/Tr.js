import React from 'react';

const Tr = (props) => (
    <tr>
        <td>
            <img src={props.pictureUrl} />
        </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>

        {/* Iteration 4 */}
        <td>
            <button onClick={props.clickToDelete}>Delete</button>
        </td>
    </tr>
)

export default Tr;