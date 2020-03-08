import React from "react";
//import ReactDOM from "react-dom";

export const Item = ({ name, pictureUrl, popularity }) => {
  return (
    <div className="container">
      <img src={pictureUrl} alt={`${name}'s face`} className="picture" />
      <p className="name">{name}</p>
      <p className="popularity">{popularity}</p>
    </div>
  );
};
