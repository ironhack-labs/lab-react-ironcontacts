import React from 'react';

const ButtonContactGenerator = (props) => {
  return (
    <button
      onClick={props.generateContact}
      className="btn btn-large btn-yellow"
    >
      Add new random contact
    </button>
  );
};

export default ButtonContactGenerator;
