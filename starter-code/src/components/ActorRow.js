import React from "react";

const actorRow = props => {
  return (
    <div>
      <tr className="table-row">
        <td className="table-cell">
          <img className="actor-picture" src={props.pictureUrl}/>
        </td>
        <td className="table-cell">{props.name}</td>
        <td className="table-cell">{props.popularity.toFixed(2)}</td>
        <button onClick={props.onClick}> Delete </button> 

      </tr>

    </div>
  );
};

export default actorRow;


