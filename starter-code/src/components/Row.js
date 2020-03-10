import React from "react";

import "./Row.css"

export const Row = ({children}) => {
  return (
    <tr>
      <td><img className="picture" src={ children.pictureUrl }></img></td>
      <td>{ children.name }</td>
      <td>{ children.popularity }</td>
      
    </tr>
  );
};
