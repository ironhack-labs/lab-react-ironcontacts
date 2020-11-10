import React from 'react'

function Row(props) {
    return (
        <>
            <tr>
                <td>
                    <img src={props.pictureUrl} alt="foto"/>
                </td>
                <td>
                  {props.name}
                </td>
                <td>
                    {Math.round(props.popularity)}
                </td>
                <td>
                <button onClick={props.clickToDelete}>Delete</button>  
                </td>
            </tr>
        </>
    )
}


export default Row
