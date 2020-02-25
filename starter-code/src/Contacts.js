import React from 'react';

function Contacts(props) {
  return (
    <div>
        <tr key={props.key}>
            <td>
            <img src={props.pictureUrl} alt="" width="150" />
            </td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick= {props.clickToDelete} > Delete </button></td>
        </tr> 
    </div>
  )
}

export default Contacts;






