import React, { Component } from "react";

const Artist = (props) => {
  //console.log(props.artist);
  return (
    <tr>
      <td>
        <img src={props.artist.pictureUrl} style={{ width: "100px" }} />
      </td>
      <td>{props.artist.name}</td>
      <td>{props.artist.popularity}</td>
    </tr>
  );
};

export default Artist;
