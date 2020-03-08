import React from "react";

const Item = ({ name, pictureUrl, popularity }) => {
  return (
    <div className="container">
      <img className="picture" src={pictureUrl} alt={`${name}`}></img>
      <p className="name">{name}</p>
      <p className="popularity">{popularity}</p>
    </div>
  );
};

export default Item;
