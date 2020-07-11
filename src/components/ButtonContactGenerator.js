import React from 'react';

const ButtonContactGenerator = (props) => {
  return (
    <button onClick={props.generateContact} className="btn btn-blue">
      Add new random contact
    </button>
  );
};

export default ButtonContactGenerator;
