import React from 'react';

const ButtonSort = (props) => {
  return <button onClick={props.sort}>{props.cta}</button>;
};

export default ButtonSort;
