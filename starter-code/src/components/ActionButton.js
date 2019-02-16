import React, { Component } from "react";

const actionButton = props => {
  return (
    <button onClick={props.onClickFunction} className={props.className}>
      {props.children}
    </button>
  );
};

export default actionButton;
