import React from "react";

export default function Button(props) {
  return (
    <>
      <button onClick={this.handleClick} className="btn">
        {props.name}
      </button>
    </>
  );
}
