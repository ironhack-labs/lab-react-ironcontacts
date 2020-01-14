import React from "react";
import "./Row.css";

const Row = props => {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="" />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
    </tr>
  );
};

export default Row;
