import React from 'react';

const Buttons = (props) => {
  const {functionClick} = props;
  return(
  <div className="row linha">
    <button className="btn btn-primary mybtn" onClick={() => functionClick()} type="button">{props.children}</button>
  </div>
  )
}

export default Buttons;