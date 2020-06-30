import React from 'react';


const Button = (props) => {
  return (
    <div className="Button">
      <button>Add Random Contact</button>
      <button>Sort by Name</button>
      <button>Sort by Popularity</button>
    </div>
  );
};

export default Button;
