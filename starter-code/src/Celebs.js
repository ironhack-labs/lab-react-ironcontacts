import React from 'react';

function Celebs(props) {
    return (
      <tr>
        <td><img src={props.pictureUrl} alt ={props.name}/></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td><button onClick={()=> props.deleteThis(props.index)}>Del</button></td>
      </tr>
    )
  }

export default Celebs;