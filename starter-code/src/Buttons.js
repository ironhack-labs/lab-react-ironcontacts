import React from "react";

const Buttons = ({ clickToAdd, clickToSortName , clickToSortP}) => {
  return (
      <div >
        <button onClick={clickToAdd}>Add Random Contact </button>
        <button onClick={clickToSortName}>Sort by Name</button>
        <button onClick={clickToSortP}>Sort by Popularity</button>
      </div>
  );
};

export default Buttons;
