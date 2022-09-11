import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <td>
        <img src={props.person.pictureUrl} alt="Youhou" />{" "}
      </td>
      <td>{props.person.name}</td>
      <td>{props.person.popularity}</td>
      <td> {props.person.wonOscar} </td>
      {props.person.wonOscar && <p>🏆</p>}
      {/* or {props.person.wonOscar ? <p>'🏆'</p> : <p>''</p>} */}
      <td> {!props.person.wonEmmy} </td>
      {props.person.wonEmmy && <p>'🏆'</p>}
      {/* or {props.person.wonEmmy ? <p>'🏆'</p> : <p>''</p>} */}
    </tr>
  );
};

export default TableRow;