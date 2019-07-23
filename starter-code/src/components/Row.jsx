import React from "react";


const Row = (props) => {
  return (
      <tr>
        <td><img src={props.pictureUrl} alt={props.name} width="70px" /></td>
        <td>{props.name}</td>
        <td>{props.popularity.toFixed(2)}</td>
        <td><button className="delete-btn" onClick={props.deleteHandler}>Delete</button></td>
      </tr>
  );
};

export default Row;
