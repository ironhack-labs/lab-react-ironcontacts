import React from "react";
import "../App.css";

const TableData = (props) => {
  const { src, name, popularity, onclick, index } = props;
  return (
    <tr>
      <td><img src={src}/></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td><button onClick={() => onclick (index)} className="delete">Delete</button></td>
    </tr>
  )
}

export default TableData;