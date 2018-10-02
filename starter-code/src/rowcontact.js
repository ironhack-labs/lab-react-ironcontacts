import React, { Component } from 'react';




const Row = (props) => {
    return (
     <tr>
       <td><img src={props.pictureUrl} width="100"></img></td>
       <td>{props.name}</td>
       <td>{props.popularity}</td>
     </tr>
    )
}

export default Row;