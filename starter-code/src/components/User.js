// User.js
import React, {Fragment} from "react";

function User(props) {
  return (
    <>
    <td> <img src={props.pictureUrl} width="60px"/></td>
    <td>{props.name}</td>
    <td>{props.popularity}</td>
    </>
  );
}

export default User;