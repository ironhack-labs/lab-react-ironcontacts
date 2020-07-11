import React from 'react';

const ButtonDelete = (props) => {
  return (
    <button className="btn btn-red" onClick={props.delete}>
      Delete
    </button>
  );
};

export default ButtonDelete;
