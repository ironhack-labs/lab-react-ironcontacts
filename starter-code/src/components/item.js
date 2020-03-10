import React from "react";

const Item = ({ name, pictureUrl, popularity, deleteOne, id }) => {
  return (
    <div className="container">
      <img className="picture" src={pictureUrl} alt={`${name}`}></img>
      <p className="name">{name}</p>
      <p className="popularity">{popularity}</p>
      <button onClick={() => deleteOne(id)}>Delete</button>
    </div>
  );
};

export default Item;
