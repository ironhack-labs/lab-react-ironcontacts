import React from 'react'
import { DeleteButton } from '../Buttons/DeleteButton';

export const Contact = (props) => {
    return (
        
            <tr>
                <td><img style={{width: 100}} src={props.pictureUrl}/></td>
                <td>{props.name}</td>
                <td>{props.popularity.toFixed(2)}</td>
                <td><DeleteButton onClick={props.onClick} >Delete</DeleteButton></td>
            </tr>
       
    )
}
