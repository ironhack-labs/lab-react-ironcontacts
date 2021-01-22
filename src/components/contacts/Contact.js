import React from 'react';

function Contact(props){
    return(
        <tr>
            <td>
                <img src={props.pictureUrl} />
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.popularity.toFixed(2)}
            </td>
            <td>
                <button onClick={props.clickToDelete}>DELETE</button>
            </td>
        </tr>
        
    )
}
 
export default Contact