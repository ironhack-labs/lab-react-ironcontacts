import React from 'react';

const Buttons = (props) => {
  const {functionClick, text} = props;
  console.log(functionClick +' text' +text)
  return(
  <div className="row linha">
    <button className="btn btn-primary mybtn" onClick={() => functionClick(text)} type="button">{props.children}</button>
  </div>
  )
}

export default Buttons;