import React from 'react';

const row = (props) => {

    return (
      <tr>
        <td><img width="100px" height="150px" src={props.pictureUrl} alt=''/></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td><button onClick={props.deleteBtn}>Delete</button></td>
      </tr>
    );
}

export default row;