import React from 'react';

const Button = ({handleClick}) => (
    <button onClick={()=>handleClick()}>Add random contact</button>
)


export default Button;