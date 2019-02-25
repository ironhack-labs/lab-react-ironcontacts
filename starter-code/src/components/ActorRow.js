import React from "react";

const actorRow = props => {
  return (
    <tr className="table-row">
      <td className="table-cell">
        <img className="actor-picture" src={props.pictureUrl} />
      </td>
      <td className="table-cell">{props.name}</td>
      <td className="table-cell">{props.popularity.toFixed(2)}</td>
      <td>
        {" "}
        <button onClick={props.onClick}> Delete </button>
      </td>
    </tr>
  );
};

export default actorRow;
