import React from 'react';

const ButtonActions = ({text, action}) => (
  <button 
    type="button" 
    className="my-3 ml-1 btn btn-dark" 
    onClick={action}>{text}</button>
);

export default ButtonActions

