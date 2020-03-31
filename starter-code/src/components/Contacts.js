import React from 'react';

export const Contacts = (props) => {
   
    return(
            <tr>
              <td><img src={props.props.pictureUrl} alt={props.props.pictureUrl} width="150" height="200"/></td>
              <td><h2>{props.props.name}</h2></td>
              <td><h2>{props.props.popularity.toFixed(2)}</h2></td>
              <td><button onClick={props.clickToDelete}><h2>Delete</h2></button></td>
            </tr>
    )
}