import React from 'react';

const ButtonSort = (props) => {
  return (
    <button className="btn btn-blue" onClick={props.sort}>
      {props.cta}
    </button>
  );
};

export default ButtonSort;
