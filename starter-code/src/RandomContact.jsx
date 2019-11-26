import React from "react";

export default function RandomContact(props) {
  return (
    <button className="btn btn-outline-dark" onClick={props.clbk}>
      Add Random Contact
    </button>
  );
}
