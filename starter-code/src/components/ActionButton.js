import React, { Component } from "react";

const actionButton = props => {
  return <button onClick={props.onClickFunction}>{props.children}</button>;
};

export default actionButton;
