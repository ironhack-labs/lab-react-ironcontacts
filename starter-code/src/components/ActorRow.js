import React from "react";
import {Table, Button} from 'bloomer';
import 'bulma/css/bulma.css';

const actorRow = props => {
  return (
    <tr className="table-row">
      <td className="table-cell">
        <img className="actor-picture" src={props.pictureUrl} />
      </td>
      <td className="table-cell"> <p className="text1">{props.name}</p></td>
      <td className="table-cell"> <p className="text2">{props.popularity.toFixed(2)}</p> </td>
      <td>
        <Button className="delete-btn" onClick={props.clickToDelete}> Delete </Button>
      </td>
    </tr>
  );
};

export default actorRow;
