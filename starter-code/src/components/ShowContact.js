import React from "react";

const showContact = props => {
  return (
    <tr>
        <td><img src={props.pictureUrl} alt="bla" /></td>
        <td>{props.name}</td>
        <td>{props.popularity.toFixed(2)}</td>
    </tr>
  );
};

export default showContact;
