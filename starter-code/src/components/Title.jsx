import React from "react";
import "../App.css";

const Title = (props) => {
  const { children } = props;
  return (
    <h1 className='title'>{children}</h1>
  )
}

export default Title;