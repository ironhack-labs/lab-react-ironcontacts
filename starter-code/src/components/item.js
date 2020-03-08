import React from "react";

const Item = ({ name, pictureUrl, popularity, action }) => {
  return (
    <div className="container">
      <img className="picture" src={pictureUrl} alt={`${name}`}></img>
      <p className="name">{name}</p>
      <p className="popularity">{popularity}</p>
      <button className="action">Delete</button>
    </div>
  );
};

export default Item;
