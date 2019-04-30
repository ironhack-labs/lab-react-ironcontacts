import React from "react";
import "./CoolButton.css";

export default function CoolButton(props) {
  return (
    <div className="cool-buttons">
      {/* El onClick es un props más */}
      <button onClick={props.onClick} className={props.className}>
        {props.button}
      </button>
    </div>
  );
}
