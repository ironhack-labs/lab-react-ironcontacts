import React from "react";
import "./Row.css";
import "bulma/css/bulma.css";

const Row = props => {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="" />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>
        <button className="button is-danger" onClick={props.clickToDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
