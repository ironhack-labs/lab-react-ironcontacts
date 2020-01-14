import React from "react";
import "./List.css"

function List(props) {
    return (
        <tr>
          <td><img src={props.pictureUrl}></img></td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
        </tr>
    )
}

export default List;