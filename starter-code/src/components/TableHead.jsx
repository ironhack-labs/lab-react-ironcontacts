import React from "react";
import "../App.css";

const TableHead = (props) => {
  return (
    <tr>
      <td>Picture</td>
      <td>Name</td>
      <td>Popularity</td>
      <td>Delete?</td>
    </tr>
  )
}

export default TableHead;