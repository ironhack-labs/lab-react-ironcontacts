import React from "react";
import "./List.css"

//use splice and indexOf

function List(props) {

    return (
        <tr>
          <td><img src={props.pictureUrl}></img></td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
          <td><button onClick={props.clickAndDelete}>Delete</button></td>
        </tr>
    )
}

export default List;