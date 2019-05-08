import React from "react";
import "./table.css"

const Table = (props) => {
  console.log(props);
  
  return (
    <tr>
    <td><img className="img" src={props.contact.pictureUrl}/></td>
    <td>{props.contact.name}</td> 
    <td>{props.contact.popularity}</td> <button onClick={props.delete}>Delete</button>
    </tr>
  );
};

export default Table;