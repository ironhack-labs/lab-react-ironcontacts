import React from 'react'


const Buttons = ({ method, label }) =>

  <button className="main-button" onClick={method}>
    {label}
  </button>

export default Buttons
