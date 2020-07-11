import React from 'react';

const ButtonDelete = (props) => {
  return (
    <button className="btn" onClick={props.delete}>
      Delete
    </button>
  );
};

export default ButtonDelete;
