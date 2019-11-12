import React from "react";

export default function FirstFivey(props) {
  return (
    <tr>
      <th className="imgTh">
        <img
          src={props.thePerson.pictureUrl}
          className="imgstyle"
          alt={props.thePerson.name}
          title={props.thePerson.name}
        />
      </th>
      <th>
        <h4>{props.thePerson.name}</h4>
      </th>
      <th>{props.thePerson.popularity}</th>
    </tr>
  );
}
