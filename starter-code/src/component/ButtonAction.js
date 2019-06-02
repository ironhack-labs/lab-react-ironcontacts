import React from 'react';

const ButtonActions = ({text, action, id}) => (
  <button 
    type="button" 
    id={id}
    className="my-3 ml-1 btn btn-dark" 
    onClick={action}>{text}</button>
);

export default ButtonActions

