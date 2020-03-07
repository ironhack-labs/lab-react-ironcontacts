import React from "react";
import ReactDOM from "react-dom";

export const Item = ({ name, pictureUrl, popularity }) => {
  return (
    <div>
      <img src={pictureUrl} />
      <p>{name}</p>
      <p>{popularity}</p>
    </div>
  );
};
