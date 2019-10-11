import React from 'react';

const row = (props) => {
    return (
    <tr>
     <td><img width="100" height="100" class="headshot"src={props.pictureUrl}></img></td>
     <td>{props.name}</td>
     <td>{props.popularity}</td>
     <td><button onClick={props.clickToDelete}>Delete</button></td>
    </tr>
    )
  };

  export default row;



