import React from "react";

const contactRow = props => {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button onClick={props.clickToDelete}>Delete</button></td>
    </tr>
  );
};

export default contactRow;
