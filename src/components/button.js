import React from 'react';


const Button = (props) => {
  return (
    <div className="Button">
      <button onClick={props.addContact}>Add Random Contact</button>
      <button onClick={props.sortName}>Sort by Name</button>
      <button onClick={props.sortPop}>Sort by Popularity</button>
    </div>
  );
};

export default Button;
