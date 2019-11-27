import React from "react";

export default function HandlingEvent(props) {
  return (
    <button className="btn btn-light" onClick={props.clbk}>
      Add Random Contact
    </button>
  );
}
