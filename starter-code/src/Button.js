import React from 'react';

const Button = ({handleClick, sortByName, sortByPopularity}) => (
    <div>
        <button onClick={()=>handleClick()}>Add random contact</button>
        <button onClick={()=>sortByName()}>Sort by name</button>
        <button onClick={()=>sortByPopularity()}>Sort by popularity</button>
    </div>

)


export default Button;