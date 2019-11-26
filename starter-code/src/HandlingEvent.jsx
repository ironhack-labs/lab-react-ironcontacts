import React from "react";

export default function HandlingEvent(props) {
  return (
    <button className="button" onClick={props.clbk}>
      Add Random Contact
    </button>
  );
}
