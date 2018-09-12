import React from "react";



const List = props => {
    return (
    <tr>
        <td>
            <img src={props.picture} width="70px"/>
        </td>
        <td>{props.name}</td> 
        <td>{props.popularity}</td>
      </tr>
    )
  }


export default List;
